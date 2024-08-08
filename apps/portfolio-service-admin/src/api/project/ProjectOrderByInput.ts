import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  portfolioId?: SortOrder;
  projectName?: SortOrder;
  technologiesUsed?: SortOrder;
  updatedAt?: SortOrder;
};
