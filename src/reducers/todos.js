import { actionNameList } from '../consts';
const initialState = [];

export default function todoListReducer(state=initialState, action) {
    switch (action.type) {
        case actionNameList.addTodo:
            return [...state, action.payload.todo];
        default:
            return state;
    }
}
