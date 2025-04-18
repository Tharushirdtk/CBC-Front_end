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
    <ProductCard name="Laptop" price="$99.99" src="C:\Users\USER\Downloads\17578817411582823579-128.png"></ProductCard>
    <UserData> </UserData>
    </>
  )
}

export default App
