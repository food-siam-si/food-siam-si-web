import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { CheckboxButtonGroup, FormContainer, TextFieldElement } from 'react-hook-form-mui';

import { MenuType } from '@/modules/Menu/api/dto';
import { RestaurantType } from '@/modules/Restaurant/api/dto';

import { RandomFormProps } from './types';
import useRandomForm from './useRandomForm';

const RandomForm = ({ fetchTypes, handleSubmit, label }: RandomFormProps) => {
  const [types, setTypes] = useState<RestaurantType[] | MenuType[]>();
  const { methods, onSubmit } = useRandomForm(handleSubmit, label);
  useEffect(() => {
    const fetch = async () => {
      setTypes(await fetchTypes());
    };
    fetch();
  }, [fetchTypes]);

  if (!types) return null;

  return (
    <FormContainer formContext={methods} handleSubmit={onSubmit}>
      <Stack>
        <CheckboxButtonGroup
          name="types"
          label={`${label} Types`}
          options={types.map(({ id, name }) => ({ label: name, id }))}
          row
        />
        {label === 'Restaurant' && (
          <TextFieldElement name="distance" label="Distance (km)" size="small" required sx={{ mt: 1 }} />
        )}
        <Button variant="contained" sx={{ mt: 1, alignSelf: 'center' }} type="submit">
          Random {label}
        </Button>
      </Stack>
    </FormContainer>
  );
};

export default RandomForm;
