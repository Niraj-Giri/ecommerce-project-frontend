import api from "../api/axios";
import type { ProductResponse } from "../types/product/ProductResponse";
import type { ApiResponse } from "../types/common/ApiResponse";

const productService = {
  getProductsByCategoryId: async (categoryId: number): Promise<ApiResponse<ProductResponse[]>> => {
    const response = await api.get<ApiResponse<ProductResponse[]>>(`/product/category/${categoryId}`);
    return response.data;
  },

  getProductById: async (id: number): Promise<ApiResponse<ProductResponse>> => {
    const response = await api.get<ApiResponse<ProductResponse>>(`/product/${id}`);
    return response.data;
  },
};

export default productService;