import { ProjectCreateNestedManyWithoutPortfoliosInput } from "./ProjectCreateNestedManyWithoutPortfoliosInput";
import { SkillCreateNestedManyWithoutPortfoliosInput } from "./SkillCreateNestedManyWithoutPortfoliosInput";
import { TestimonialCreateNestedManyWithoutPortfoliosInput } from "./TestimonialCreateNestedManyWithoutPortfoliosInput";

export type PortfolioCreateInput = {
  contactEmail?: string | null;
  introduction?: string | null;
  ownerName?: string | null;
  projects?: ProjectCreateNestedManyWithoutPortfoliosInput;
  skills?: SkillCreateNestedManyWithoutPortfoliosInput;
  testimonials?: TestimonialCreateNestedManyWithoutPortfoliosInput;
  title?: string | null;
};
