import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  portfolio?: PortfolioWhereUniqueInput | null;
  projectName?: string | null;
  technologiesUsed?: string | null;
};
