import { useState } from 'react'

import './App.css'
import ClassState from './components/ClassComponentState/ClassState'
import ParentClassState from './components/ClassComponentState/ParentClassState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ClassState/> */} 
      <ParentClassState/>
    </>
  )
}

export default App
