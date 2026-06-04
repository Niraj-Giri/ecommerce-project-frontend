// Returned by: GET /api/category, POST /api/admin/category/add
export interface CategoryResponse {
  id: number;
  name: string;
  imageUrl: string;
  slug: string;
  parentId: number | null;
}
