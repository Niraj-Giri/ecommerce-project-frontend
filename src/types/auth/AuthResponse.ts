// Returned by: POST /api/auth/login
export interface AuthResponse {
  jwtToken: string;
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
}
