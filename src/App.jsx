import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing.jsx'
import LoginPage from './components/pages/loginPage'
import HomePage from './components/pages/homePage'
import SignInPage from './components/pages/signInPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './components/pages/adminHomePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes path="/*">
          <Route path="/home" element={<HomePage/>}></Route>

          <Route path="/login" element={<LoginPage/>}></Route>

          <Route path='/*' element={<h1>404 error</h1>}></Route>

          <Route path= "/signin" element={<signInPage/>}/>

          <Route path="/admin/*" element={<AdminHomePage/>}/>
        </Routes>

       
       

      </BrowserRouter>
      

    </>
  )
}

export default App;
