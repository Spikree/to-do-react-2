import { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    
  }
  return <>
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder="what is the task today" onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="todo-btn">Add task</button>
    </form>
  </>
}

export default TodoForm;