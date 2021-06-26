import React from 'react'

const Form = ({setInputText, setTodos, todos, inputText}) => {
   // Disini saya bisa menulis kode javascript dan functioin
   const inputTextHandler = (e) => {
      console.log(e.target.value)
      setInputText(e.target.value)
   }
   const submitTodoHandler = (e) => {
      e.preventDefault()
      setTodos([
         ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
      ])
      setInputText("")
   }

   return (
      <form>
         <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
         <button onClick={submitTodoHandler} className="todo-button" type="submit">
         <i className="fas fa-plus-square"></i>
         </button>
         <div className="select">
         <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
         </select>
         </div>
      </form>
   )
}

export default Form