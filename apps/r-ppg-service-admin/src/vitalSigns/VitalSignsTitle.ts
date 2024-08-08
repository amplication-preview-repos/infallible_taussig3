import { VitalSigns as TVitalSigns } from "../api/vitalSigns/VitalSigns";

export const VITALSIGNS_TITLE_FIELD = "bloodPressure";

export const VitalSignsTitle = (record: TVitalSigns): string => {
  return record.bloodPressure?.toString() || String(record.id);
};
