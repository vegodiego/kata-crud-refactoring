import React, { useContext, useRef, useState } from 'react';
import Store from '../../store';


const TodoListForm = () => {
  const HOST_API = "http://localhost:8080/api";
  const formRef = useRef(null);
  const { state: { todoList }, dispatch } = useContext(Store);
  const item = todoList.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: null
    };

    fetch(HOST_API + "/todoList", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todoList) => {
        dispatch({ type: "add-todoList", item: todoList });
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  return <form className="form-inline" ref={formRef}>
    <div className="form-group">
      <input type="text" name="name" placeholder="Nombre de la lista" className="form-control-sm" defaultValue={item.name} onChange={(event) => {setState({ ...state, name: event.target.value })}}></input>
    </div>
    <button type="button" className="btn btn-success btn-sm ml-2" onClick={onAdd}>Nueva lista</button>
  </form>
}

export default TodoListForm;