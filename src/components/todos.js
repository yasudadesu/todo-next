import React from 'react';

export default class TodoList extends React.Component {
  render() {
    const { todoList } = this.props;
    return (
      <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {
          todoList.map((todo, i) => (
          <tr key={i}>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>
              <input type="button" value="削除" onClick={() => this.props.handleDelete(i)}/>
            </td>
          </tr>
          )
        )}
      </tbody>
      </table>
    );
  }
}
