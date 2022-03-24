const initialState = {
    data: [],
  };
  
  const Todo = (state = initialState, action) => {
    switch (action.type) {
       case "Todolist_PENDING":
          return {
            ...state
          };
        case "Todolist_REJECTED":
          return {
            ...state
          };
        case "Todolist_FULFILLED":
        return {
          ...state,
          data:action.payload.data
        };
        case "Post_Todolist":
        return {
          ...state,
          data:[...state.data, action.payload]
        };
        case "Update_Todolist":
          const newDataAfterUpdate = state.data.map(d=>{
            if(d.id === action.payload.id) return action.payload
            else return d
          })
        return {
          ...state,
          data:newDataAfterUpdate
        };
        case "Delete_Todolist":
          const newDataAfterDelete = state.data.filter(d=> d.id !== action.payload)
          return {
            ...state,
            data:newDataAfterDelete
          };
      default:
        return state;
    }
  };
  
  export default Todo;