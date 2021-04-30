import React from 'react';
import update from 'immutability-helper';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import InputField from './shared/InputField';
import useActions from './hooks/useActions';
import useSelector from './hooks/useSelector';

const Detail: React.FC = () => {
  const id = useParams();
  const { data } = useSelector((state) => state.user);
  const { updateForm } = useActions();
  const selectedForm = data.filter(
    (d: Record<string, string>) => d.id.toString() === id
  )[0];
  const [form, setForm] = React.useState(selectedForm);
  const [toEdit, setToEdit] = React.useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = update(form, {
      [event.target.name]: { $set: event.target.value },
    });
    setForm(changedValue);
  };

  const onSubmit = () => {
    setToEdit(!toEdit);
    updateForm(form);
  };

  return (
    <>
      {toEdit ? (
        <>
          <InputField
            select={false}
            multiline={false}
            title="Description"
            value={form.description}
            onChange={onChange}
          />
          <InputField
            select
            multiline={false}
            title="Category"
            value={form.category}
            onChange={onChange}
          />
          <InputField
            select={false}
            multiline
            title="Content"
            value={form.content}
            onChange={onChange}
          />
        </>
      ) : (
        <div>
          Description: ${form.description}
          <br />
          Category: ${form.category}
          <br />
          Content: ${form.content}
        </div>
      )}
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setToEdit(!toEdit)}
        disabled={!toEdit}
      >
        Edit?
      </Button>
      <Button variant="outlined" color="secondary" onClick={onSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Detail;
