import { ENUM } from "@app/constants";

import { ResponseWithAudit } from "./common";

export type Response = ResponseWithAudit<{
  id: number;
  name: string;
  type: ENUM.Address_Type | null;
  phoneNo: string;
  detailed_address: string;
  isDefaultAddress: boolean;
  barangayId: number;
  userId: string;
}>;
