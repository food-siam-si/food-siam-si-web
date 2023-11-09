import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { CheckboxButtonGroup, FormContainer } from 'react-hook-form-mui';

import { MenuType } from '@/modules/Menu/api/dto';
import { RestaurantType } from '@/modules/Restaurant/api/dto';

import { RandomFormProps } from './types';

const RandomForm = ({ fetchTypes, handleSubmit, label }: RandomFormProps) => {
  const [types, setTypes] = useState<RestaurantType[] | MenuType[]>();
  useEffect(() => {
    const fetch = async () => {
      setTypes(await fetchTypes());
    };
    fetch();
  }, [fetchTypes]);

  if (!types) return null;

  return (
    <FormContainer onSuccess={(data) => handleSubmit(data.types)}>
      <Stack>
        <CheckboxButtonGroup
          name="types"
          label={`${label} Types`}
          options={types.map(({ id, name }) => ({ label: name, id }))}
          row
        />
        <Button variant="contained" sx={{ mt: 1, alignSelf: 'center' }} type="submit">
          Random {label}
        </Button>
      </Stack>
    </FormContainer>
  );
};

export default RandomForm;
