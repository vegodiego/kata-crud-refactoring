import React, { useReducer } from 'react';
import Store from './store';
import reducer from './components/toDo/reducer';


const initialState = {
  todo: { list: [], item: {} }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>
}

export default StoreProvider ;