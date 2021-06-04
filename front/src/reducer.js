function reducer(state, action) {
  switch (action.type) {
    case "update-todo":
      const todoUpItem = state.todo;
      const listUpdateEdit = todoUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      return {...state, todo: { list: listUpdateEdit, item: {} }, todoList: state.todoList };
    case "delete-todo":
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      todoUpDelete.list = listUpdate;
      return { ...state, todo: todoUpDelete, todoList: state.todoList };
    case "update-list-todo":
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList, todoList: state.todoList };
    case "edit-todo":
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit, todoList: state.todoList };
    case "add-todo":
      const todoUp = state.todo.list;
      todoUp.push(action.item);
      return { ...state, todo: { list: todoUp, item: {} }, todoList: state.todoList };
    case "add-todoList":
      const todoListUp = state.todoList.list;
      todoListUp.push(action.item);
      return {...state, todo: state.todo , todoList: { list: todoListUp, item: {} } };


    default:
      return state;
  }
}

export default reducer;
