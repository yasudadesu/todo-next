import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { addTodo, deleteTodo } from '../actions/todos';
import TodoForm from './todoForm';
import TodoList from '../components/todos';
import Typography from '@material-ui/core/Typography';

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(index) {
    this.props.deleteTodo(index)
  }

  render() {
    return (
      <div>
        <Typography variant="display3" gutterBottom>TodoList</Typography>
        <TodoForm onSubmit={this.props.addTodo}/>
        
        <hr />
        <TodoList 
          todoList={this.props.todoList} 
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo))
    dispatch(reset('todo'))  // todoForm.jsで設定した名前
  },
  deleteTodo: (index) =>  dispatch(deleteTodo(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
