import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

interface InputProps {
  select: boolean;
  multiline: boolean;
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const options = [
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'js', label: 'JS' },
];

const InputField: React.FC<InputProps> = ({
  select,
  multiline,
  title,
  value,
  onChange,
}: InputProps) => {
  return (
    <TextField
      select={select}
      multiline={multiline}
      label={title}
      name={title}
      margin="normal"
      value={value}
      onChange={onChange}
      style={{ width: 300 }}
    >
      {select &&
        options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default InputField;
