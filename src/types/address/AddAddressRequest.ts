// Used for: POST /api/address/add
export interface AddAddressRequest {
  area: string;
  city: string;
  state: string;
  zipcode: string;
  mobile: string;
  house: string;
  fullName: string;
}
