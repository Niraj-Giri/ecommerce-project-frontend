import api from "../api/axios";
import type { CartAddRequest } from "../types/cart/CartAddRequest";
import type { CartUpdateRequest } from "../types/cart/CartUpdateRequest";
import type { CartResponse } from "../types/cart/CartResponse";
import type { ApiResponse } from "../types/common/ApiResponse";

const cartService = {
  getCart: async (): Promise<ApiResponse<CartResponse>> => {
    const response = await api.get<ApiResponse<CartResponse>>("/cart");
    return response.data;
  },

  addToCart: async (data: CartAddRequest): Promise<ApiResponse<void>> => {
    const response = await api.post<ApiResponse<void>>("/cart/add", data);
    return response.data;
  },

  updateQuantity: async (cartItemId: number, data: CartUpdateRequest): Promise<ApiResponse<void>> => {
    const response = await api.put<ApiResponse<void>>(`/cart/update/${cartItemId}`, data);
    return response.data;
  },

  removeFromCart: async (cartItemId: number): Promise<ApiResponse<void>> => {
    const response = await api.delete<ApiResponse<void>>(`/cart/remove/${cartItemId}`);
    return response.data;
  },
};

export default cartService;