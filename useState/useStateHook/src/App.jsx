import { useState } from 'react'

import './App.css'
import ClassState from './components/ClassComponentState/ClassState'
import ParentClassState from './components/ClassComponentState/ParentClassState'
import FunctionalComponent from './components/functionalUsestate/FunctionalComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ClassState/> */} 
      <ParentClassState/>
      <FunctionalComponent/>
    </>
  )
}

export default App
