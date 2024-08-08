import * as graphql from "@nestjs/graphql";
import { TestimonialResolverBase } from "./base/testimonial.resolver.base";
import { Testimonial } from "./base/Testimonial";
import { TestimonialService } from "./testimonial.service";

@graphql.Resolver(() => Testimonial)
export class TestimonialResolver extends TestimonialResolverBase {
  constructor(protected readonly service: TestimonialService) {
    super(service);
  }
}
