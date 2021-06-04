import React from 'react';
import TodoForm from './components/toDo/TodoForm';
import TodoList from './components/toDo/TodoList';
import TodoListForm from './components/todoList/TodoListForm';
import StoreProvider from './provider';


function App() {
  return <StoreProvider>
    <TodoListForm />
    <h3>To-Do List</h3>
    <TodoForm />
    <TodoList />
  </StoreProvider>
}

export default App;
