import { AveragePrice } from '../api/dto';

export const parseAveragePrice = (averagePrice: AveragePrice): string => {
  switch (averagePrice) {
    case AveragePrice.LowerThanHundreds:
      return '< 100 ฿';
    case AveragePrice.HundredToTwoHundred:
      return '100 - 200 ฿';
    case AveragePrice.TwoHundredToFiveHundred:
      return '200 - 500 ฿';
    case AveragePrice.MoreThanFiveHundred:
      return '> 500 ฿';
    case AveragePrice.MoreThanOneThousand:
      return '> 1000 ฿';
  }
};
