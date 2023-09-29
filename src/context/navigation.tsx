import { ReactNode, createContext, useEffect, useState } from 'react'

type NavigationContextType = {
  navigate: (to: string) => void
  currentPath: string
}

const NavigationContext = createContext<NavigationContextType>({
  navigate: () => null,
  currentPath: window.location.pathname,
})

type NavigationProviderProps = {
  children: ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handler)

    return () => {
      window.removeEventListener('popstate', handler)
    }
  }, [])

  const navigate = (to: string) => {
    window.history.pushState({}, '', to)
    setCurrentPath(to)
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationContext
