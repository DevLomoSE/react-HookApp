import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "../../styles/todo.css";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 0) return;

    const newTodo = {
      id: crypto.randomUUID(),
      desc: description,
      done: false,
    };

    const addTodo = {
      type: "add",
      payload: newTodo,
    };

    dispatch(addTodo);
    reset();
  };

  return (
    <>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-outline-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="ToDo"
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-outline-primary btn-block mt-1"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};