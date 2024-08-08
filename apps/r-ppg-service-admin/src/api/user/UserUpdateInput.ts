import { InputJsonValue } from "../../types";
import { VitalSignsUpdateManyWithoutUsersInput } from "./VitalSignsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  age?: number | null;
  email?: string | null;
  firstName?: string | null;
  gender?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  vitalSignsItems?: VitalSignsUpdateManyWithoutUsersInput;
};
