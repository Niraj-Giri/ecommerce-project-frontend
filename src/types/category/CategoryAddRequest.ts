// Used for: POST /api/admin/category/add
export interface CategoryAddRequest {
  name: string;
  slug: string;
  imageUrl: string;
  parentId?: number | null;
}
