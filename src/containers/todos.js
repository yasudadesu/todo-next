import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions/todos';
import TodoForm from './todoForm';
import TodoList from '../components/todos';

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
        <h2>TodoList</h2>
        <TodoForm onSubmit={this.props.addTodo} 
        />
        
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
  addTodo: (todo) => dispatch(addTodo(todo)),
  deleteTodo: (index) =>  dispatch(deleteTodo(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
