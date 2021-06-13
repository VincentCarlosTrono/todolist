import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoCard from "./TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  console.log(todos);
  return (
    <>
      {todos && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos.slice(0, 10).map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </>
  );
};

export default Todos;
