import { ProjectUpdateManyWithoutPortfoliosInput } from "./ProjectUpdateManyWithoutPortfoliosInput";
import { SkillUpdateManyWithoutPortfoliosInput } from "./SkillUpdateManyWithoutPortfoliosInput";
import { TestimonialUpdateManyWithoutPortfoliosInput } from "./TestimonialUpdateManyWithoutPortfoliosInput";

export type PortfolioUpdateInput = {
  contactEmail?: string | null;
  introduction?: string | null;
  ownerName?: string | null;
  projects?: ProjectUpdateManyWithoutPortfoliosInput;
  skills?: SkillUpdateManyWithoutPortfoliosInput;
  testimonials?: TestimonialUpdateManyWithoutPortfoliosInput;
  title?: string | null;
};
