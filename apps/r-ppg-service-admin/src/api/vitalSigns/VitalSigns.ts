import { User } from "../user/User";

export type VitalSigns = {
  bloodPressure: string | null;
  createdAt: Date;
  heartAge: number | null;
  heartRate: number | null;
  heartRateVariability: number | null;
  id: string;
  respirationRate: number | null;
  spO2: number | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
