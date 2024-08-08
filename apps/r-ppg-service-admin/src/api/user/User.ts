import { JsonValue } from "type-fest";
import { VitalSigns } from "../vitalSigns/VitalSigns";

export type User = {
  age: number | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  gender: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  vitalSignsItems?: Array<VitalSigns>;
};
