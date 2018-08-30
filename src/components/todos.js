import React from 'react';
import TodoCard from './card';

export default class TodoList extends React.Component {
  render() {
    const { todoList } = this.props;
    return (
      <div>
        {todoList.map((todo, i) => (
          <TodoCard
            key={i}
            title={todo.title}
            description={todo.description}
            handleDelete={this.props.handleDelete}
            index={i}
            />
        ))}
      </div>
    );
  }
}
