import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthPage from './features/auth/AuthPage'
import RegisterPage from './features/auth/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterPage/>
    </>
  )
}

export default App
