import { Portfolio } from "../portfolio/Portfolio";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  portfolio?: Portfolio | null;
  projectName: string | null;
  technologiesUsed: string | null;
  updatedAt: Date;
};
