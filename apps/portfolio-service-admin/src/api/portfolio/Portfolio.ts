import { Project } from "../project/Project";
import { Skill } from "../skill/Skill";
import { Testimonial } from "../testimonial/Testimonial";

export type Portfolio = {
  contactEmail: string | null;
  createdAt: Date;
  id: string;
  introduction: string | null;
  ownerName: string | null;
  projects?: Array<Project>;
  skills?: Array<Skill>;
  testimonials?: Array<Testimonial>;
  title: string | null;
  updatedAt: Date;
};
