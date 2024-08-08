import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type SkillCreateInput = {
  portfolio?: PortfolioWhereUniqueInput | null;
  proficiencyLevel?: string | null;
  skillName?: string | null;
};
