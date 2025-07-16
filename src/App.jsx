import React, { useState } from "react";
import "./App.css";
function TodoApp() {
  const [task, setTask] = useState("");
  const [ todoList, setTodoList] = useState([]);

  const addtask = () => {
    if (task.trim()!==""){
      setTodoList([...todoList,task]);
      setTask("");
    }
  };

    const deleteTask = (index) => {
      const updateList = todoList.filter((_, i) => i !== index);
      setTodoList(updateList);
    };
  return (
    <div id="container">
      <h2>Todo List</h2>
      <input
        placeholder="enter your task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addtask}>Add</button>
      <ol>
        {todoList.map((item,index) =>(
          <li key={index}>{item} <button id="del" onClick={()=> deleteTask (index)}> Delete </button>
          </li>
        ))}
      </ol>
    </div>
      

  );
}

export default TodoApp;
