import React from 'react';
import { Field, reduxForm } from 'redux-form';

const TodoForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Todo Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="題名"
          />
        </div>
      </div>
      <div>
        <label>Todo Description</label>
        <div>
          <Field
            name="description"
            component="input"
            type="text"
            placeholder="説明"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>送信</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          クリア
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'todo',
})(TodoForm);
