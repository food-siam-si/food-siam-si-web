import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { apiClient } from '@/common/libs/axios';
import { handleError } from '@/common/utils/handleError';
import { RestaurantApi } from '@/modules/Restaurant/api/restaurantApi';

import type { CreateMenuDto, Menu, MenuType } from './dto';

export class MenuApi {
  @handleError()
  static async get(restaurantId: number): Promise<Menu[]> {
    const res = await apiClient.get(`/restaurant/${restaurantId}/menus`);
    return res.data;
  }

  @handleError({ throwError: true })
  static async create(data: CreateMenuDto): Promise<void> {
    const restaurant = await RestaurantApi.getCurrent(true);
    await apiClient.post(`/restaurant/${restaurant?.id}/menus`, data);
  }

  @handleError({ throwError: true })
  static async update(menuId: number, data: CreateMenuDto): Promise<void> {
    const restaurant = await RestaurantApi.getCurrent(true);
    await apiClient.put(`/restaurant/${restaurant?.id}/menus/${menuId}`, data);
  }

  @handleError({ throwError: true })
  static async delete(menuId: number): Promise<void> {
    const restaurant = await RestaurantApi.getCurrent(true);
    await apiClient.delete(`/restaurant/${restaurant?.id}/menus/${menuId}`);
  }

  @handleError()
  static async getRecommended(restaurantId: number): Promise<Menu[]> {
    const res = await apiClient.get(`/restaurant/${restaurantId}/menus/recommend`);
    return res.data;
  }

  @handleError()
  static async setRecommend(isRecommended: boolean, restaurantId: number, menuId: number): Promise<void> {
    const res = await apiClient.put(`/restaurant/${restaurantId}/menus/${menuId}/recommend`, { isRecommended });
    return res.data;
  }

  @handleError()
  static async getTypes(): Promise<MenuType[]> {
    const res = await apiClient.get(`/menu/type`);
    return res.data.types;
  }

  @handleError()
  static async getTypesByRestaurantId(restaurantId: number): Promise<MenuType[]> {
    const res = await apiClient.get(`/restaurant/${restaurantId}/menus/type`);
    return res.data.types;
  }

  @handleError({ overrideMessage: { 404: 'No menu match your criteria' } })
  static async random(restaurantId: number, types: number[]): Promise<Menu> {
    const res = await apiClient.get(`/restaurant/${restaurantId}/menus/random`, { params: { types } });
    return res.data;
  }

  @handleError()
  static async getCurrent(): Promise<Menu[]> {
    const restaurant = await RestaurantApi.getCurrent(true);
    const res = await apiClient.get(`/restaurant/${restaurant?.id}/menus`);
    return res.data;
  }

  @handleError()
  static async getSelfMenuInfo(menuId: number): Promise<Menu> {
    const res = await this.getCurrent();

    if (!res)
      throw new AxiosError('', '', {} as InternalAxiosRequestConfig, 0, {
        status: 403,
        data: { message: 'Forbidden' },
      } as AxiosResponse);

    const menu = res.find((menu) => menu.id === menuId);
    if (!menu)
      throw new AxiosError('', '', {} as InternalAxiosRequestConfig, 0, {
        status: 404,
        data: { message: 'Menu not found' },
      } as AxiosResponse);
    return menu;
  }
}
