import { Module } from "@nestjs/common";
import { TestimonialModuleBase } from "./base/testimonial.module.base";
import { TestimonialService } from "./testimonial.service";
import { TestimonialController } from "./testimonial.controller";
import { TestimonialResolver } from "./testimonial.resolver";

@Module({
  imports: [TestimonialModuleBase],
  controllers: [TestimonialController],
  providers: [TestimonialService, TestimonialResolver],
  exports: [TestimonialService],
})
export class TestimonialModule {}
