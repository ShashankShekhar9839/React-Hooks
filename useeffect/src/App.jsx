import { useState } from 'react'
import './App.css'
import WindowSizeList from './components/classComponents/WindowSizeList'
import WindowSizeListParent from './components/classComponents/WindowSizeListParent'
import WindowSizeFunctional from './components/functionalComponents/WindowSizeFunctional'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WindowSizeListParent/>
     <WindowSizeFunctional/>
    </>
  )
}

export default App
