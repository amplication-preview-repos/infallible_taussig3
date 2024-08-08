import { SortOrder } from "../../util/SortOrder";

export type PortfolioOrderByInput = {
  contactEmail?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  introduction?: SortOrder;
  ownerName?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
