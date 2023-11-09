import { RouteProps } from 'react-router-dom';

import LandingPage from '@/modules/Landing/pages/LandingPage';
import MenuPage from '@/modules/Menu/page/MenuPage';
import EditRestaurantPage from '@/modules/Restaurant/pages/EditRestaurantPage';
import OwnerRestaurantPage from '@/modules/Restaurant/pages/OwnerRestaurantPage';
import RestaurantPage from '@/modules/Restaurant/pages/RestaurantPage';
import LoginPage from '@/modules/User/pages/LoginPage';
import SignUpPage from '@/modules/User/pages/SignUpPage';

export const ROUTING_PROPS: RouteProps[] = [
  {
    path: '/',
    Component: LandingPage,
  },

  { path: '/login', Component: LoginPage },
  { path: '/register', Component: SignUpPage },

  // owner
  { path: '/restaurant', Component: OwnerRestaurantPage },
  { path: '/restaurant/edit', Component: EditRestaurantPage },

  // customer
  { path: '/restaurants/:id', Component: RestaurantPage },
  { path: '/restaurants/:id/menu', Component: MenuPage },
];
