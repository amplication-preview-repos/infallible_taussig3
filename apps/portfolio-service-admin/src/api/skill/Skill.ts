import { Portfolio } from "../portfolio/Portfolio";

export type Skill = {
  createdAt: Date;
  id: string;
  portfolio?: Portfolio | null;
  proficiencyLevel: string | null;
  skillName: string | null;
  updatedAt: Date;
};
