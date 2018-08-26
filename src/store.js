import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import todoListReducer from './reducers/todos';

const reducer = combineReducers({
  form: reduxFormReducer,
  todoList: todoListReducer,
});

const store = createStore(
    reducer,
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
