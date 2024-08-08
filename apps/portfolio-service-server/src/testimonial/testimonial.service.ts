import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestimonialServiceBase } from "./base/testimonial.service.base";

@Injectable()
export class TestimonialService extends TestimonialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
