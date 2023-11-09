import { Button, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { CheckboxElement, FormContainer, MultiSelectElement, TextFieldElement } from 'react-hook-form-mui';

import { MenuApi } from '../../api';
import { MenuType } from '../../api/dto';
import { MenuFormProps } from './types';

const MenuForm = ({ initialData }: MenuFormProps) => {
  const [types, setTypes] = useState<MenuType[]>();

  useEffect(() => {
    const fetchTypes = async () => {
      setTypes(await MenuApi.getTypes());
    };
    fetchTypes();
  }, []);

  if (!types) return null;

  return (
    <Paper sx={{ maxWidth: 1200, minWidth: 'min(1200px, 100%)', boxSizing: 'border-box', p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Edit Menu
      </Typography>
      <FormContainer
        defaultValues={{ ...initialData, addons: initialData?.addons.join(', ') }}
        onSuccess={(data) => console.log(data)}
      >
        <Stack gap={2}>
          <CheckboxElement label="Is Recommended" name="isRecommended" />
          <TextFieldElement name="title" label="Name" required />
          <TextFieldElement name="description" label="Description" required multiline rows={3} />
          <TextFieldElement name="imageUrl" label="Menu Image Url" required />
          <Stack direction={{ md: 'row', xs: 'column' }} gap={2}>
            <TextFieldElement name="price" label="Price" required fullWidth />
            <MultiSelectElement
              itemKey="id"
              itemLabel="name"
              label="Menu Types"
              name="menuTypes"
              options={types}
              showChips
              fullWidth
            />
          </Stack>

          <TextFieldElement name="addons" label='Addons (Split with "," )' />
          <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-end' }}>
            Save
          </Button>
        </Stack>
      </FormContainer>
    </Paper>
  );
};

export default MenuForm;