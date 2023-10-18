import { Button, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FormContainer, MultiSelectElement, SelectElement, TextFieldElement } from 'react-hook-form-mui';

import { RestaurantType } from '../../api/dto';
import { RestaurantApi } from '../../api/restaurantApi';
import { AVERAGE_PRICE } from '../../constants';
import { RestaurantFormProps } from './types';

const RestaurantForm = ({ initialData }: RestaurantFormProps) => {
  const [types, setTypes] = useState<RestaurantType[]>();

  useEffect(() => {
    const fetchTypes = async () => {
      setTypes(await RestaurantApi.getTypes());
    };
    fetchTypes();
  }, []);

  if (!types) return null;

  return (
    <Paper sx={{ maxWidth: 1200, p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Edit Restaurant
      </Typography>
      <FormContainer defaultValues={initialData} onSuccess={(data) => console.log(data)}>
        <Stack gap={2}>
          <TextFieldElement name="name" label="Name" required />
          <TextFieldElement name="description" label="Description" required multiline rows={3} />
          <TextFieldElement name="imageUrl" label="Restarant Image Url" required />
          <Stack direction="row" gap={2}>
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
          <Stack direction="row" gap={2}>
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
