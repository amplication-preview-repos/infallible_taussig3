import { StringFilter } from "../../util/StringFilter";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SkillWhereInput = {
  id?: StringFilter;
  portfolio?: PortfolioWhereUniqueInput;
  proficiencyLevel?: StringNullableFilter;
  skillName?: StringNullableFilter;
};
