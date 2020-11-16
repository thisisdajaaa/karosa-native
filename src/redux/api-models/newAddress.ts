export type Request = {
  type: string;
  name: string;
  phoneNo: string;
  postalCode: string;
  address_line_1: string;
  address_line_2: string;
  barangayId: number;
};

export type Response = {
  id: string;
  type: string | null;
  name: string;
  phoneNo: string;
  postalCode: string;
  address_line_1: string;
  address_line_2: string | null;
  barangayId: number;
  userId: string;
};
