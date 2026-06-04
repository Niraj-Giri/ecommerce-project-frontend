import api from "../api/axios";
import type { CategoryResponse } from "../types/category/CategoryResponse";
import type { ApiResponse } from "../types/common/ApiResponse";

const categoryService = {
  getAllCategories: async (): Promise<ApiResponse<CategoryResponse[]>> => {
    const response = await api.get<ApiResponse<CategoryResponse[]>>("/category/all");
    return response.data;
  },
};

export default categoryService;