import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  portfolio?: PortfolioWhereUniqueInput;
  projectName?: StringNullableFilter;
  technologiesUsed?: StringNullableFilter;
};
