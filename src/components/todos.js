import React from 'react';

export default class TodoList extends React.Component {
  render() {
    const { todoList } = this.props;
    return (
      <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Discription</th>
        </tr>
      </thead>
      <tbody>
        {
          todoList.map((todo, i) => (
          <tr key={i}>
            <td>{todo.title}</td>
            <td>{todo.discription}</td>
          </tr>
          )
        )}
      </tbody>
      </table>
    );
  }
}
