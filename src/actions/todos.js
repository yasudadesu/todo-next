import { actionNameList } from '../consts';

export const addTodo = (todo) => ({
  type: actionNameList.addTodo,
  payload: {
    todo
  }
})
