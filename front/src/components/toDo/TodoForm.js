import React, { useContext, useRef, useState } from 'react';
import Store from '../../store';


const TodoForm = ({todoListId}) => {
  const HOST_API = "http://localhost:8080/api";
  const formRef = useRef(null);
  const { state: { todo, todoList }, dispatch } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: null,
      completed: false,
      todoListId: todoListId
    };

    fetch(HOST_API + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "add-todo", item: todo });
        formRef.current.reset();
      });
  }

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
      todoListId: todoListId
    };

    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "update-todo", item: todo });
        formRef.current.reset();
      });
  }

  return <form ref={formRef}>
    <input
      type="text"
      name="name"
      placeholder="¿Qué piensas hacer hoy?"
      defaultValue={item.name}
      onChange={(event) => {
        setState({ ...state, name: event.target.value })
      }}  ></input>
    {item.id && <button onClick={onEdit}>Actualizar</button>}
    {!item.id && <button onClick={onAdd}>Crear</button>}
  </form>
}

export default TodoForm;