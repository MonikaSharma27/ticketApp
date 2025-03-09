import './App.css'
import {BrowserRouter,Routes ,Route} from 'react-router-dom';
import TicketPage from './components/TicketPage';
import Navbar from './components/Navbar';

import Home from './components/Home';

function App() {
  

  return (
    <>
    <div className='bg-[#2b3441] text-[#f1f3f5] h-screen  max-h-screen '>
    <Navbar/>
    <Routes>
    <Route path='/' element = { <Home/>}/>
      <Route path='/ticketpage/:id' element = { <TicketPage/>}/>
    </Routes>
        
    </div>
 
    </>
  )
}

export default App
