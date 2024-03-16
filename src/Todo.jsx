import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  // Storing Todo to the LocalStorage
  const Storing_todo = () => {
    const todo = document.getElementById("todo");
    addTodo(todo.value.trim());
    todo.value = "";
  };

  // Function to add a new todo
  const addTodo = (todoContent) => {
    if (!todoContent) {
      alert("Please enter Something!");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      Todo_content: todoContent,
      checked: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  //To handle key press event
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      Storing_todo();
    }
  };

  // Updating Todos
  const checkList = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // Deleting Todos
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="Todo--card">
      <div className="input--div">
        <input type="text" id="todo" onKeyPress={handleKeyPress} />

        <MdAddBox
          className="add--btn"
          role="button"
          tabIndex="0"
          onClick={Storing_todo}
        />
      </div>

      {todos.length ? (
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              <input
                className="check--box"
                type="checkbox"
                checked={item.checked}
                onChange={() => checkList(item.id)}
              />

              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onClick={() => checkList(item.id)}
                onDoubleClick={() => deleteTodo(item.id)}
              >
                {item.Todo_content}
              </label>

              <FaTrash
                className="del--btn"
                role="button"
                tabIndex="0"
                onClick={() => deleteTodo(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Your TODO is empty!</h1>
      )}
      <div className="Note--to--user">
        <small>Note:</small>
        <p style={{ marginTop: ".3em" }}>1.Single Tap to StrickOut your TASK</p>
        <p>2.Double Tap to Delete your TASK</p>
      </div>
    </div>
  );
};

export default Todo;
