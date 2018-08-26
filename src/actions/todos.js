import { actionNameList } from '../consts';

export const addTodo = (todo) => ({
  type: actionNameList.addTodo,
  payload: {
    todo
  }
})

export const deleteTodo = (index) => ({
  type: actionNameList.deleteTodo,
  payload: {
    id: index,
  }
})
