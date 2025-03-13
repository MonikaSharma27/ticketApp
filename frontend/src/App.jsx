import './App.css'
import {BrowserRouter,Routes ,Route} from 'react-router-dom';
import TicketPage from './components/TicketPage';


import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  

  return (
    <>
    <div className='bg-[#2b3441] text-[#f1f3f5] h-screen  max-h-screen '>
   
    <Routes>
    <Route path='/' element = { <Login/>}/>
    <Route path='/signup' element = { <Signup/>}/>
    <Route path='/home' element = { <Home/>}/>
      <Route path='/ticketpage/:id' element = { <TicketPage/>}/>
    </Routes>
   
        
    </div>
 
    </>
  )
}

export default App
