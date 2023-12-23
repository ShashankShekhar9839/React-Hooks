import { useMemo } from "react";
import { filterTodos } from "./utils";
import List from "./List";
// import '../../src/App.css';


export default function TodoList({todos, tab, theme}) { 
    let visibleTodos = useMemo(()=> {
       return filterTodos(todos, tab)
    }, [todos, tab]); 

    return (
        <div className = {theme}>
            {/* <ul> 
                {visibleTodos?.map(todo => (
                    <li key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
                ))}


            </ul> */} 
          
         <List items = {visibleTodos}/>
             
        </div>
    )
}

