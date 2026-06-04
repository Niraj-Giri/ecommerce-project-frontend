// Returned by: GET /api/cart
import { CartItemResponse } from './CartItemResponse';

export interface CartResponse {
  cartId: number;
  items: CartItemResponse[];
}
