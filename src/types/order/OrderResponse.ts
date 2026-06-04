// Returned by: POST /api/order/place, GET /api/order/my-orders
export interface OrderResponse {
  id: number;
  orderId: string;
  status: string;
  totalAmount: number;
  orderDate: string;
}
