export enum AveragePrice {
  LowerThanHundreds = 'LowerThanHundreds',
  HundredToTwoHundred = 'HundredToTwoHundred',
  TwoHundredToFiveHundred = 'TwoHundredToFiveHundred',
  MoreThanFiveHundred = 'MoreThanFiveHundred',
  MoreThanOneThousand = 'MoreThanOneThousand',
}

export interface CreateRestaurantRequest {
  name: string;
  description: string;
  phoneNumber: string;
  locationLat: number;
  locationLong: number;
  averagePrice: AveragePrice;
  imageUrl?: string;
  restaurantTypeIds: number[];
}

export interface UpdateRestaurantRequest {
  name: string;
  description: string;
  phoneNumber: string;
  locationLat: number;
  locationLong: number;
  averagePrice: AveragePrice;
  imageUrl: string;
  restaurantTypeIds: number[];
  isInService: boolean;
}

export interface RandomRestaurantRequest {
  restaurantTypeIds: number[];
  currentLat?: number;
  currentLong?: number;
  maxDistanceKm?: number;
}

export interface RestaurantType {
  id: number;
  name: string;
}

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  phoneNumber: string;
  locationLat: number;
  locationLong: number;
  averagePrice: AveragePrice;
  imageUrl: string;
  restaurantType: RestaurantType[];
  rating: number;
}
