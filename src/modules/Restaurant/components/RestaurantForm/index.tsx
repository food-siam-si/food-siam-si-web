import { Button, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FormContainer, MultiSelectElement, SelectElement, TextFieldElement } from 'react-hook-form-mui';

import { RestaurantType } from '../../api/dto';
import { RestaurantApi } from '../../api/restaurantApi';
import { AVERAGE_PRICE } from '../../constants';
import { RestaurantFormProps } from './types';
import useRestaurantForm from './useRestaurantForm';

const RestaurantForm = ({ initialData }: RestaurantFormProps) => {
  const [types, setTypes] = useState<RestaurantType[]>();

  const { methods, onSubmit } = useRestaurantForm(initialData);

  useEffect(() => {
    const fetchTypes = async () => {
      setTypes(await RestaurantApi.getTypes());
    };
    fetchTypes();
  }, []);

  if (!types) return null;

  return (
    <Paper sx={{ maxWidth: 1200, minWidth: 'min(1200px, 100%)', boxSizing: 'border-box', p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Edit Restaurant
      </Typography>
      <FormContainer formContext={methods} handleSubmit={onSubmit}>
        <Stack gap={2}>
          <TextFieldElement name="name" label="Name" required />
          <TextFieldElement name="description" label="Description" required multiline rows={3} />
          <TextFieldElement name="imageUrl" label="Restarant Image Url" required />
          <Stack direction={{ md: 'row', xs: 'column' }} gap={2}>
            <SelectElement name="averagePrice" label="Average Price" required options={AVERAGE_PRICE} fullWidth />
            <MultiSelectElement
              itemKey="id"
              itemLabel="name"
              label="Restaurant Types"
              name="restaurantTypeIds"
              options={types}
              showChips
              fullWidth
            />
          </Stack>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Contact Info
          </Typography>
          <TextFieldElement name="phoneNumber" label="Phone Number" required />
          <Stack direction={{ md: 'row', xs: 'column' }} gap={2}>
            <TextFieldElement name="locationLat" label="Latitude" required fullWidth />
            <TextFieldElement name="locationLong" label="Longtitude" required fullWidth />
          </Stack>
          <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-end' }}>
            Save
          </Button>
        </Stack>
      </FormContainer>
    </Paper>
  );
};

export default RestaurantForm;
