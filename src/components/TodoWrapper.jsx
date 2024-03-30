import { useState } from "react";
import TodoForm from "./TodoForm";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
  }
  return <>
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo}/>
    </div>
  </>
}

export default TodoWrapper;