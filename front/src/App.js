import React from 'react';
import TodoListForm from './components/todoList/TodoListForm';
import TodoListList from './components/todoList/TodoListList';
import StoreProvider from './provider';


function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <TodoListForm />
    <TodoListList />
  </StoreProvider>
}

export default App;
