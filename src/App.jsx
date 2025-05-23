import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1 className='name'>Name:Anri</h1>
    <h1 className='lastname'>Lastname:Aleksaniani</h1>
    <h1 className='age'>Age:15</h1>
    <h1 className='hobby'>Hobby:Playing rugby</h1>
   </div>
  )
}

export default App
