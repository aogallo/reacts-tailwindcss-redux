import './App.css'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'

function App() {
  return (
    <div className='container'>
      <h1 className='text-2xl text-center'>
        Learning Reactjs with Tailwindcss
      </h1>
      <DropdownPage />
      <ButtonPage />
      <AccordionPage />
    </div>
  )
}

export default App
