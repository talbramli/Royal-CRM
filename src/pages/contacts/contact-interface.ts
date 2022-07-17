export interface Contact {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;
  phone: string;
  age: number;
  address?: Address;
}

interface Address {
  state?: string;
  country: string;
  street: string;
  houseNumber: number;
  zip?: number;
}
