import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import TodoForm from './todoForm';
import TodoList from '../components/todos';

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <h2>TodoList</h2>
        <TodoForm onSubmit={this.props.addTodo} 
        />
        
        <hr />
        <TodoList todoList={this.props.todoList} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
