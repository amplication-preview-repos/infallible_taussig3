import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  portfolio?: PortfolioWhereUniqueInput | null;
  projectName?: string | null;
  technologiesUsed?: string | null;
};
