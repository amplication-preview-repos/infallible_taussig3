import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestimonialService } from "./testimonial.service";
import { TestimonialControllerBase } from "./base/testimonial.controller.base";

@swagger.ApiTags("testimonials")
@common.Controller("testimonials")
export class TestimonialController extends TestimonialControllerBase {
  constructor(protected readonly service: TestimonialService) {
    super(service);
  }
}
