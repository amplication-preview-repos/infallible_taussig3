import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VitalSignsCreateInput = {
  bloodPressure?: string | null;
  heartAge?: number | null;
  heartRate?: number | null;
  heartRateVariability?: number | null;
  respirationRate?: number | null;
  spO2?: number | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
