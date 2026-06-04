// Returned by: GET /api/product, GET /api/product/{id}
export interface ProductResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  slug: string;
  mrp: number;
}