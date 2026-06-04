// Used for: POST /api/auth/register
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
}