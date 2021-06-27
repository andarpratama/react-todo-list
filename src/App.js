import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
   const [inputText, setInputText] = useState("")
   const [todos, setTodos] = useState([])
   const [status, setStatus] = useState("all")
   const [filterTodo, setFilterTodo] = useState([])

   useEffect(() => {
      filterHandler()
   }, [todos])

   const filterHandler = () => {
      switch (status) {
         case 'completed':
            setFilterTodo(todos.filter(todo => todo.completed === true))
            break
         case 'uncompleted':
            setFilterTodo(todos.filter(todo => todo.completed === false))
            break
         default:
            setFilterTodo(todos)
            break
      }
   }

   return (
      <div className="App">
      <header>
         <h1>Andar Todo List</h1>
      </header>
      <Form 
         inputText={inputText}
         todos={todos}
         setTodos={setTodos}
         setInputText={setInputText}
         setStatus={setStatus}
      />
      <TodoList filterTodo={filterTodo} setTodos={setTodos} todos={todos} />
      </div>
   );
}

export default App;
