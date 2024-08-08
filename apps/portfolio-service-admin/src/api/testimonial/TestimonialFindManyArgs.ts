import { TestimonialWhereInput } from "./TestimonialWhereInput";
import { TestimonialOrderByInput } from "./TestimonialOrderByInput";

export type TestimonialFindManyArgs = {
  where?: TestimonialWhereInput;
  orderBy?: Array<TestimonialOrderByInput>;
  skip?: number;
  take?: number;
};
