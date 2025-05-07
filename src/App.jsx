import { useState } from 'react'
import './App.css'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='bg-primary'>
    <BrowserRouter>
    <Routes path="/*">          
    <Route path="/*" element={<HomePage/>}/>   
    <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
