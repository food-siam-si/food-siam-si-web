import { handleError } from '@/common/utils/handleError';

import { Menu } from './dto';

const MOCK_MENU = [
  {
    id: 1,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor congue mauris, at venenatis libero ultrices sed. Nulla facilisi. Curabitur a auctor neque',
    price: 10000,
    isRecommended: true,
    imageUrl: 'https://picsum.photos/200/300',
    restaurantId: 1,
    addons: ['addons', 'addons'],
    type: [
      {
        id: 1,
        title: 'title',
      },
    ],
  },
  {
    id: 2,
    title: 'Title',
    description: 'description',
    price: 10000,
    isRecommended: true,
    imageUrl: 'https://picsum.photos/500/300',
    restaurantId: 1,
    addons: ['addons', 'addons'],
    type: [
      {
        id: 1,
        title: 'title',
      },
      {
        id: 2,
        title: 'title2',
      },
    ],
  },
];

export class MenuApi {
  @handleError()
  static async get(restaurantId: number): Promise<Menu[]> {
    return MOCK_MENU;
  }

  @handleError()
  static async getRecommended(restaurantId: number): Promise<Menu[]> {
    return MOCK_MENU;
  }
}