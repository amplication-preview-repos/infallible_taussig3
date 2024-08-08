import { SortOrder } from "../../util/SortOrder";

export type SkillOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  portfolioId?: SortOrder;
  proficiencyLevel?: SortOrder;
  skillName?: SortOrder;
  updatedAt?: SortOrder;
};
