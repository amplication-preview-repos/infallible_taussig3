import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VitalSignsListRelationFilter } from "../vitalSigns/VitalSignsListRelationFilter";

export type UserWhereInput = {
  age?: IntNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  username?: StringFilter;
  vitalSignsItems?: VitalSignsListRelationFilter;
};
