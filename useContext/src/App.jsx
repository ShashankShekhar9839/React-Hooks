import React, { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';

export  const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('dark');
  const [name, setName] = useState('Shashank')
  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme, name, setName}} >
      <ChildComponent/>
    </ThemeContext.Provider>
    </>
  )
}

export default App
