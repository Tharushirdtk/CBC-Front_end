import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes path="/*">          
    <Route path="/*" element={<HomePage/>}/>   
    <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
