import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type TestimonialCreateInput = {
  clientName?: string | null;
  feedback?: string | null;
  portfolio?: PortfolioWhereUniqueInput | null;
};
