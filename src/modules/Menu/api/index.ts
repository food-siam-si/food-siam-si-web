import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { apiClient } from '@/common/libs/axios';
import { handleError } from '@/common/utils/handleError';

import type { CreateMenuDto, Menu, MenuType } from './dto';

export class MenuApi {
  @handleError()
  static async get(restaurantId: number): Promise<Menu[]> {
    const res = await apiClient.get(`/restaurant/${restaurantId}/menus`);
    return res.data;
  }

  @handleError()
  static async createMenu(restaurantId: number, data: CreateMenuDto): Promise<void> {
    await apiClient.post(`/restaurant/${restaurantId}/menus`, data);
    return;
  }

  @handleError()
  static async updateMenu(restaurantId: number, menuId: number, data: CreateMenuDto): Promise<void> {
    await apiClient.put(`/restaurant/${restaurantId}/menus/${menuId}`, data);
    return;
  }

  @handleError()
  static async deleteMenu(restaurantId: number, menuId: number): Promise<void> {
    await apiClient.delete(`/restaurant/${restaurantId}/menus/${menuId}`);
    return;
  }

  @handleError()
  static async getRecommended(restaurantId: number): Promise<Menu[]> {
    const res = await apiClient.get(`/restaurant/${restaurantId}/menus/recommend`);
    return res.data;
  }

  @handleError()
  static async setRecommendMenu(isRecommended: boolean, restaurantId: number, menuId: number): Promise<void> {
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

  @handleError()
  static async random(restaurantId: number, types: number[]): Promise<Menu> {
    const res = await apiClient.get(`/restaurant/${restaurantId}/menus/random`, { params: { types } });
    return res.data;
  }

  @handleError()
  static async getCurrent(): Promise<Menu[]> {
    const id = 1;
    const res = await apiClient.get(`/restaurant/${id}/menus`);
    return res.data;
  }

  @handleError()
  static async getSelfMenuInfo(menuId: number): Promise<Menu> {
    const res = await this.getCurrent();

    const menu = res.find((menu) => menu.id === menuId);
    if (!menu)
      throw new AxiosError('', '', {} as InternalAxiosRequestConfig, 0, {
        status: 404,
        data: { message: 'Menu not found' },
      } as AxiosResponse);
    return menu;
  }
}
