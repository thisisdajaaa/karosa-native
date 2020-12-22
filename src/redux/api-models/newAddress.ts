export type Request = {
  name: string;
  phoneNo: string;
  detailed_address: string;
  isDefaultAddress: boolean;
  barangayId: number;
};

export type Response = {
  id: string;
  name: string;
  phoneNo: string;
  detailed_address: string;
  isDefaultAddress: string;
  barangayId: number;
  userId: number;
};
