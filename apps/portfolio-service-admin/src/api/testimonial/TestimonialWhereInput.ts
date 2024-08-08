import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type TestimonialWhereInput = {
  clientName?: StringNullableFilter;
  feedback?: StringNullableFilter;
  id?: StringFilter;
  portfolio?: PortfolioWhereUniqueInput;
};
