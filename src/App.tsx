import './App.css'
import Route from './components/Route'
import Sidebar from './components/Sidebar'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'

function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar />
      <div className='col-span-5'>
        <h1 className='text-2xl text-center m-3'>
          Learning Reactjs with Tailwindcss
        </h1>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
      </div>
    </div>
  )
}

export default App
