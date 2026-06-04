/**
 * Central barrel export for all TypeScript interfaces.
 * Import from here instead of individual files:
 *
 * import { LoginRequest, AuthResponse, ApiResponse } from '@/types';
 */

// Common
export type { ApiResponse } from './common/ApiResponse';

// Auth
export type { LoginRequest } from './auth/LoginRequest';
export type { AuthResponse } from './auth/AuthResponse';
export type { LoginResponse } from './auth/LoginResponse'; // @deprecated alias for AuthResponse
export type { RegisterRequest } from './auth/RegisterRequest';

// Address
export type { AddAddressRequest } from './address/AddAddressRequest';
export type { AddressResponse } from './address/AddressResponse';

// Category
export type { CategoryAddRequest } from './category/CategoryAddRequest';
export type { CategoryResponse } from './category/CategoryResponse';

// Product
export type { ProductAddRequest } from './product/ProductAddRequest';
export type { ProductResponse } from './product/ProductResponse';

// Cart
export type { CartAddRequest } from './cart/CartAddRequest';
export type { CartUpdateRequest } from './cart/CartUpdateRequest';
export type { CartItemResponse } from './cart/CartItemResponse';
export type { CartResponse } from './cart/CartResponse';

// Order
export type { PlaceOrderRequest } from './order/PlaceOrderRequest';
export type { OrderResponse } from './order/OrderResponse';
