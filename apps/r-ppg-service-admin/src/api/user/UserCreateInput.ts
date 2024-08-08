import { InputJsonValue } from "../../types";
import { VitalSignsCreateNestedManyWithoutUsersInput } from "./VitalSignsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  age?: number | null;
  email?: string | null;
  firstName?: string | null;
  gender?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  vitalSignsItems?: VitalSignsCreateNestedManyWithoutUsersInput;
};
