import { RouteProps } from 'react-router-dom';

import DemoPage from '@/modules/Demo';
import LandingPage from '@/modules/Landing';
import EditRestaurantPage from '@/modules/Restaurant/pages/EditRestaurantPage';
import RestaurantPage from '@/modules/Restaurant/pages/RestaurantPage';
import LoginPage from '@/modules/User/pages/LoginPage';
import SignUpPage from '@/modules/User/pages/SignUpPage';

export const ROUTING_PROPS: RouteProps[] = [
  {
    path: '/',
    Component: DemoPage,
  },
  {
    path: '/demo',
    Component: LandingPage,
  },
  { path: '/restaurants/edit', Component: EditRestaurantPage },
  { path: '/restaurants/:id', Component: RestaurantPage },
  { path: '/login', Component: LoginPage },
  { path: '/register', Component: SignUpPage },
];
