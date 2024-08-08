import { Portfolio } from "../portfolio/Portfolio";

export type Testimonial = {
  clientName: string | null;
  createdAt: Date;
  feedback: string | null;
  id: string;
  portfolio?: Portfolio | null;
  updatedAt: Date;
};
