import { AveragePrice } from './api/dto';

export const AVERAGE_PRICE = [
  {
    id: AveragePrice.LowerThanHundreds,
    label: '< 100 ฿',
  },
  {
    id: AveragePrice.HundredToTwoHundred,
    label: '100 - 200 ฿',
  },
  {
    id: AveragePrice.TwoHundredToFiveHundred,
    label: '200 - 500 ฿',
  },
  {
    id: AveragePrice.MoreThanFiveHundred,
    label: '> 500 ฿',
  },
  {
    id: AveragePrice.MoreThanOneThousand,
    label: '> 1000 ฿',
  },
];
