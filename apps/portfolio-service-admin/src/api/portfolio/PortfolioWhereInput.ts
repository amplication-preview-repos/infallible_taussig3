import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { SkillListRelationFilter } from "../skill/SkillListRelationFilter";
import { TestimonialListRelationFilter } from "../testimonial/TestimonialListRelationFilter";

export type PortfolioWhereInput = {
  contactEmail?: StringNullableFilter;
  id?: StringFilter;
  introduction?: StringNullableFilter;
  ownerName?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  skills?: SkillListRelationFilter;
  testimonials?: TestimonialListRelationFilter;
  title?: StringNullableFilter;
};
