import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type TestimonialUpdateInput = {
  clientName?: string | null;
  feedback?: string | null;
  portfolio?: PortfolioWhereUniqueInput | null;
};
