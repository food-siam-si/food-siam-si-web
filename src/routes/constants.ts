import { RouteProps } from 'react-router-dom';

import DemoPage from '@/modules/Demo';
import LandingPage from '@/modules/Landing';
import RestaurantPage from '@/modules/Restaurant/pages/RestaurantPage';

export const ROUTING_PROPS: RouteProps[] = [
  {
    path: '/',
    Component: DemoPage,
  },
  {
    path: '/demo',
    Component: LandingPage,
  },
  { path: '/restaurants/:id', Component: RestaurantPage },
];
