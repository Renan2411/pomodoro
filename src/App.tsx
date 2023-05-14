import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Relogio from './components/relogio'
import { Button, ButtonGroup } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center'>

        <div>
          
        </div>

        <Relogio></Relogio>
      </div>
    </>
  )
}

export default App
