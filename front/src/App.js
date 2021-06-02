import React from 'react';
import Form from './components/toDo/Form';
import List from './components/toDo/List';
import StoreProvider from './provider';


function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;
