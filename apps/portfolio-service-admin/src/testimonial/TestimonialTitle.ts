import { Testimonial as TTestimonial } from "../api/testimonial/Testimonial";

export const TESTIMONIAL_TITLE_FIELD = "clientName";

export const TestimonialTitle = (record: TTestimonial): string => {
  return record.clientName?.toString() || String(record.id);
};
