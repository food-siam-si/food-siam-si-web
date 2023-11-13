import * as yup from 'yup';

import { AveragePrice } from '@/modules/Restaurant/api/dto';

export const restaurantFromSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  imageUrl: yup.string().url().required(),
  averagePrice: yup.mixed<AveragePrice>().oneOf(Object.values(AveragePrice)).required(),
  restaurantTypeIds: yup.array().of(yup.number().required()).required(),
  phoneNumber: yup
    .string()
    .matches(/^0[0-9]{9}$/, 'phoneNumber is not in the correct format')
    .required(),
  locationLat: yup.number().typeError('Latitude must be a number').required(),
  locationLong: yup.number().typeError('Longtitude must be a number').required(),
});

export type IRestaurantFormSchema = yup.InferType<typeof restaurantFromSchema>;
