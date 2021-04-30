/* eslint-disable no-alert */
import React from 'react';
import { v4 as uuid } from 'uuid';
import update from 'immutability-helper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputField from './shared/InputField';
import useActions from './hooks/useActions';
import useSelector from './hooks/useSelector';

interface State {
  id: string | number;
  description: string;
  category: string;
  content: string;
  lastModifiedDate: Date | null;
  select: boolean;
}

const initialState = {
  id: '',
  description: '',
  category: '',
  content: '',
  lastModifiedDate: null,
  select: false,
};

const Submittion: React.FC = () => {
  const { addForm } = useActions();
  const { loading } = useSelector((state) => state.user);

  const [form, setForm] = React.useState<State>(initialState);

  const onSubmit = () => {
    if (!!form.description && !!form.content && !!form.category) {
      form.lastModifiedDate = new Date();
      addForm(form);
    } else {
      alert('Please finish filling required field.');
    }
    setForm(initialState);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = update(form, {
      [event.target.name]: { $set: event.target.value },
      id: { $set: uuid() },
      select: { $set: false },
    });
    setForm(value);
  };

  return (
    <>
      <Paper>
        <InputField
          select={false}
          multiline={false}
          title="Description"
          value={form.description}
          onChange={onInputChange}
        />
      </Paper>
      <Paper>
        <InputField
          select
          multiline={false}
          title="Category"
          value={form.category}
          onChange={onInputChange}
        />
      </Paper>
      <Paper>
        <InputField
          select={false}
          multiline
          title="Content"
          value={form.content}
          onChange={onInputChange}
        />
      </Paper>
      <Paper>
        <Button variant="outlined" color="secondary" onClick={onSubmit}>
          Submit
        </Button>
        {loading && <p>sumbitting...</p>}
      </Paper>
    </>
  );
};

export default Submittion;
