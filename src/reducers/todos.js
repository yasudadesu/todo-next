import { actionNameList } from '../consts';
const initialState = [];

export default function todoListReducer(state=initialState, action) {
  switch (action.type) {
    case actionNameList.addTodo:
      return [...state, action.payload.todo];
    case actionNameList.deleteTodo:
      state.splice(action.payload.id, 1);
      return [...state];
    default:
      return state;
  }
}
