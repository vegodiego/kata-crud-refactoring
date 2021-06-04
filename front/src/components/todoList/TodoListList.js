import React, { useContext, useEffect } from "react";
import Store from "../../store";
import TodoForm from '../toDo/TodoForm';
import TodoList from '../toDo/TodoList';

const TodoListList = () => {
  const HOST_API = "http://localhost:8080/api";
  const {
    state: { todoList },
    dispatch,
  } = useContext(Store);
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
            <div key={todoList.id}>
              <fieldset>
                <legend>
                  {todoList.name/*.toUpperCase()*/}
                  <button onClick={() => onDelete(todoList.id)}>Eliminar</button>
                </legend>
                <TodoForm todoListId={todoList.id} />
                <TodoList todoListId={todoList.id} />
              </fieldset>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoListList;
