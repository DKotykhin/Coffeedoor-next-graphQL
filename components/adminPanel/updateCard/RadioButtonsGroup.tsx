import * as React from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';

interface IRadio {
  onChange: (arg: string) => void
}

const RadioButtonsGroup: React.FC<IRadio> = ({ onChange }) => {
  const [value, setValue] = React.useState('edit');

  React.useEffect(() => {
    onChange(value)
  }, [onChange, value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl sx={{ mb: 2 }}>
      <RadioGroup
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="edit" control={<Radio />} label="Редагувати поточну" />
        <FormControlLabel value="add" control={<Radio />} label="Додати нову" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;
