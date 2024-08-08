import { SortOrder } from "../../util/SortOrder";

export type VitalSignsOrderByInput = {
  bloodPressure?: SortOrder;
  createdAt?: SortOrder;
  heartAge?: SortOrder;
  heartRate?: SortOrder;
  heartRateVariability?: SortOrder;
  id?: SortOrder;
  respirationRate?: SortOrder;
  spO2?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
