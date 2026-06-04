import api from "../api/axios";
import type { PlaceOrderRequest } from "../types/order/PlaceOrderRequest";
import type { OrderResponse } from "../types/order/OrderResponse";
import type { ApiResponse } from "../types/common/ApiResponse";

const orderService = {
  placeOrder: async (data: PlaceOrderRequest): Promise<ApiResponse<OrderResponse>> => {
    const response = await api.post<ApiResponse<OrderResponse>>("/order/place", data);
    return response.data;
  },

  getOrderById: async (orderId: number): Promise<ApiResponse<OrderResponse>> => {
    const response = await api.get<ApiResponse<OrderResponse>>(`/order/${orderId}`);
    return response.data;
  },

  getMyOrders: async (): Promise<ApiResponse<OrderResponse[]>> => {
    const response = await api.get<ApiResponse<OrderResponse[]>>("/order/my-orders");
    return response.data;
  },

  cancelOrder: async (orderId: number): Promise<ApiResponse<void>> => {
    const response = await api.delete<ApiResponse<void>>(`/order/cancel/${orderId}`);
    return response.data;
  },

  getAllOrders: async (): Promise<ApiResponse<OrderResponse[]>> => {
    const response = await api.get<ApiResponse<OrderResponse[]>>("/order/all");
    return response.data;
  },

  getOrderByStatus: async (status: string): Promise<ApiResponse<OrderResponse[]>> => {
    const response = await api.get<ApiResponse<OrderResponse[]>>(`/order/status/${status}`);
    return response.data;
  },
};

export default orderService;