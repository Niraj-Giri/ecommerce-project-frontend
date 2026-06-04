import api from "../api/axios";
import type { AddAddressRequest } from "../types/address/AddAddressRequest";
import type { AddressResponse } from "../types/address/AddressResponse";
import type { ApiResponse } from "../types/common/ApiResponse";

const addressService = {
  addAddress: async (data: AddAddressRequest): Promise<ApiResponse<void>> => {
    const response = await api.post<ApiResponse<void>>("/address/add", data);
    return response.data;
  },

  getAllAddress: async (): Promise<ApiResponse<AddressResponse[]>> => {
    const response = await api.get<ApiResponse<AddressResponse[]>>("/address/all");
    return response.data;
  },

  updateAddress: async (addressId: number, data: AddAddressRequest): Promise<ApiResponse<void>> => {
    const response = await api.put<ApiResponse<void>>(`/address/${addressId}`, data);
    return response.data;
  },

  deleteAddress: async (addressId: number): Promise<ApiResponse<void>> => {
    const response = await api.delete<ApiResponse<void>>(`/address/${addressId}`);
    return response.data;
  },
};

export default addressService;