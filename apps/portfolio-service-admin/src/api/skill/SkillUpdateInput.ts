import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type SkillUpdateInput = {
  portfolio?: PortfolioWhereUniqueInput | null;
  proficiencyLevel?: string | null;
  skillName?: string | null;
};
