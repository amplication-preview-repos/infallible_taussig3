import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VitalSignsWhereInput = {
  bloodPressure?: StringNullableFilter;
  heartAge?: IntNullableFilter;
  heartRate?: IntNullableFilter;
  heartRateVariability?: FloatNullableFilter;
  id?: StringFilter;
  respirationRate?: FloatNullableFilter;
  spO2?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
