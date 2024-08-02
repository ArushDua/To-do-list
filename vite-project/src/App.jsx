import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const HandleEdit = (index) => {
    const newTodo = prompt("Edit your todo", todos[index].todo);
    if (newTodo !== null && newTodo !== "") {
      const updatedTodos = [...todos];
      updatedTodos[index].todo = newTodo;
      setTodos(updatedTodos);
    }
  };

  const HandleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const HandleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("");
  };

  const HandleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-slate-100 min-h-[70vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add A todo</h2>
          <input onChange={HandleChange} value={todo} type="text" className="w-1/2 " />
          <button onClick={HandleAdd} className="bg-slate-400 hover:bg-slate-600 p-2 text-sm font-bold py-1 text-white rounded-lg mx-6">Add</button>
        </div>

        <h2 className="text-lg font-bold">Your Todos</h2>

        <div className="todos">
          {todos.map((item, index) => (
            <div className="todo flex" key={index}>
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={() => HandleEdit(index)} className="bg-slate-400 hover:bg-slate-600 p-2 text-sm font-bold py-1 text-white rounded-lg mx-2">Edit</button>
                <button onClick={() => HandleDelete(index)} className="bg-slate-400 hover:bg-slate-600 p-2 text-sm font-bold py-1 text-white rounded-lg mx-2">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;