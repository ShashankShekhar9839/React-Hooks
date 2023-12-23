import { useState } from "react";
import { createTodos } from "./utils";
import TodoList from "./TodoList";



export default function Main() {
    const [tab, setTab] = useState('all');
    const [isDark, setIsDark] = useState(false); 

    const todos = createTodos();  

    let theme = `${isDark ? 'dark' : 'light'}`;
    console.log(theme)

    return(
        <>
        <button onClick={()=> setTab('all')}>All</button>
        <button onClick={() => setTab('active')}>Active</button>
        <button onClick={()=> setTab("completed")}>Completed</button>
         <br/> 
         <hr/>
          <label>
          <input type="checkbox" checked = {isDark} onChange={e=>setIsDark(e.target.checked)} /> 

          Dark Mode
          </label> 

          <hr/> 
          <TodoList 
           todos = {todos} 
           tab = {tab} 
        //    theme = {isDark ? 'dark' : 'light'}
           theme={theme}
          />
         

        </>
    )
}