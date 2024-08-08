import { VitalSignsWhereInput } from "./VitalSignsWhereInput";
import { VitalSignsOrderByInput } from "./VitalSignsOrderByInput";

export type VitalSignsFindManyArgs = {
  where?: VitalSignsWhereInput;
  orderBy?: Array<VitalSignsOrderByInput>;
  skip?: number;
  take?: number;
};
