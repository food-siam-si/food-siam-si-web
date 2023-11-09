import { RouteProps } from 'react-router-dom';

import LandingPage from '@/modules/Landing/pages/LandingPage';
import CreateMenuPage from '@/modules/Menu/page/CreateMenuPage';
import EditMenuPage from '@/modules/Menu/page/EditMenuPage';
import MenuPage from '@/modules/Menu/page/MenuPage';
import OwnerMenuPage from '@/modules/Menu/page/OwnerMenuPage';
import RandomPage from '@/modules/Random/pages/RandomPage';
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
  { path: '/manage/restaurant', Component: OwnerRestaurantPage },
  { path: '/manage/restaurant/edit', Component: EditRestaurantPage },
  { path: '/manage/menu', Component: OwnerMenuPage },
  { path: '/manage/menu/:id/edit', Component: EditMenuPage },
  { path: '/manage/menu/create', Component: CreateMenuPage },

  // customer
  { path: '/restaurants/:id', Component: RestaurantPage },
  { path: '/restaurants/:id/menu', Component: MenuPage },
  { path: '/random', Component: RandomPage },
];
