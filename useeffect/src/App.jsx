import { useState } from 'react'
import './App.css'
import WindowSizeList from './components/classComponents/WindowSizeList'
import WindowSizeListParent from './components/classComponents/WindowSizeListParent'
import WindowSizeFunctional from './components/functionalComponents/WindowSizeFunctional'
import WindowSizeFunctionalParent from './components/functionalComponents/WindowSizeFunctionalParent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WindowSizeListParent/>
     <WindowSizeFunctionalParent/>
    </>
  )
}

export default App
