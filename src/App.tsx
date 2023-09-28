import './App.css'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'

function App() {
  return (
    <div className='container mx-auto mt-1'>
      <h1 className='text-2xl text-center m-3'>
        Learning Reactjs with Tailwindcss
      </h1>
      <DropdownPage />
      <ButtonPage />
      <AccordionPage />
    </div>
  )
}

export default App
