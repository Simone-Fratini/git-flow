import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-red-400 text-7xl pt-10'>Template React</h1>
      <p>Riga modificata anche da altri</p>
    </>
  )
}

export default App
