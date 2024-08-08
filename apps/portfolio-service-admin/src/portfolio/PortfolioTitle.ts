import { Portfolio as TPortfolio } from "../api/portfolio/Portfolio";

export const PORTFOLIO_TITLE_FIELD = "ownerName";

export const PortfolioTitle = (record: TPortfolio): string => {
  return record.ownerName?.toString() || String(record.id);
};
