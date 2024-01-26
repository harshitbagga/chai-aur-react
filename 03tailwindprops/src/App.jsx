import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'
function App() {
  const [count, setCount] = useState(0)
   //let myobj = {
    //username : "hitesh",
    //age : 25
   //}
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
<Card username = "ChaiaurCode" btnText = "Click Me" />
<Card username = "Harshit" btnext = "Visit Me"/>
    </>
  )
}

export default App
