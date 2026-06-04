// Returned by: GET /api/address, POST /api/address/add
export interface AddressResponse {
  id: number;
  area: string;
  city: string;
  state: string;
  zipcode: string;
  mobile: string;
  house: string;
  fullName: string;
}
