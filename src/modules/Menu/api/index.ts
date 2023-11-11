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
    return res.data;
  }

  @handleError()
  static async random(restaurantId: number, params: number): Promise<Menu> {
    const res = await apiClient.get(`/restaurant/${restaurantId}/menus/random`, { params });
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
    const res = await RestaurantApi.getCurrent(true);
    const restaurantId = res?.id;
    const res2 = await apiClient.get(`/restaurant/${restaurantId}/menus/${menuId}`);
    return res2.data;
  }
}
