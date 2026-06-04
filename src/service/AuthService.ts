import api from "../api/axios";
import type { AuthResponse } from "../types/auth/AuthResponse";
import type { LoginRequest } from "../types/auth/LoginRequest";
import type { RegisterRequest } from "../types/auth/RegisterRequest";
import type { ApiResponse } from "../types/common/ApiResponse";

const authService = {
  login: async (data: LoginRequest): Promise<ApiResponse<AuthResponse>> => {
    const response = await api.post<ApiResponse<AuthResponse>>("/auth/login", data);
    return response.data;
  },

  register: async (data: RegisterRequest): Promise<ApiResponse<AuthResponse>> => {
    const response = await api.post<ApiResponse<AuthResponse>>("/auth/register", data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};

export default authService;