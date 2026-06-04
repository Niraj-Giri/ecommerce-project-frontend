// Used for: POST /api/admin/product/add
export interface ProductAddRequest {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  slug: string;
  quantity: number;
  mrp: number;
}
