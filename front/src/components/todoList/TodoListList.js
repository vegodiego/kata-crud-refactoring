import React, { useContext, useEffect } from "react";
import Store from "../../store";
import TodoForm from '../toDo/TodoForm';
import TodoList from '../toDo/TodoList';

const TodoListList = () => {
  const HOST_API = "http://localhost:8080/api";
  const { state: { todoList }, dispatch } = useContext(Store);
  const currentList = todoList.list;

  useEffect(() => {
    fetch(HOST_API + "/todoLists")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list-todoList", list });
      });
  }, [dispatch]);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todoList", {
      method: "DELETE",
    }).then((todoList) => {
      dispatch({ type: "delete-todoList", id });
    });
  };

  return (
    <div>
      <div>
        {currentList.map((todoList) => {
          return (
            <div className="p-3 my-3 border"  key={todoList.id}>
              <div className="d-flex justify-content-between mb-4">
                <h4>{ todoList.name ? todoList.name.toUpperCase() : ""}</h4>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onDelete(todoList.id)}>Eliminar</button>
              </div>
              <TodoForm todoListId={todoList.id} />
              <TodoList todoListId={todoList.id} />
            </div>
          );
        })}
        <div className={currentList.length === 0 ? "": "d-none"}>No se han creado listas de tareas aún.</div>
      </div>
    </div>
  );
};

export default TodoListList;