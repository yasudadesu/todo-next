import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../components/textField';
import IconLabelButton from '../components/button';

const TodoForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            id="name"
            name="title"
            label="Title"
            component={renderTextField}
            type="text"
            margin="normal"
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            id="multiline-flexible"
            name="description"
            label="Description"
            component={renderTextField}
            type="text"
            multiline
            rowsMax="4"
            margin="normal"
          />
        </div>
      </div>
      <div>
        <IconLabelButton
          type="submit"
          variant="contained"
          color="primary"
          value="保存"
          iconClassName="save"
          disabled={pristine || submitting} />
        <IconLabelButton
          variant="contained"
          color="default"
          value="クリア"
          iconClassName="delete"
          disabled={pristine || submitting}
          onClick={reset} />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'todo',
})(TodoForm);
