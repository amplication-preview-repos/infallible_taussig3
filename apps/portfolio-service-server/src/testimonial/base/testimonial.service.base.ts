/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Testimonial as PrismaTestimonial,
  Portfolio as PrismaPortfolio,
} from "@prisma/client";

export class TestimonialServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TestimonialCountArgs, "select">
  ): Promise<number> {
    return this.prisma.testimonial.count(args);
  }

  async testimonials(
    args: Prisma.TestimonialFindManyArgs
  ): Promise<PrismaTestimonial[]> {
    return this.prisma.testimonial.findMany(args);
  }
  async testimonial(
    args: Prisma.TestimonialFindUniqueArgs
  ): Promise<PrismaTestimonial | null> {
    return this.prisma.testimonial.findUnique(args);
  }
  async createTestimonial(
    args: Prisma.TestimonialCreateArgs
  ): Promise<PrismaTestimonial> {
    return this.prisma.testimonial.create(args);
  }
  async updateTestimonial(
    args: Prisma.TestimonialUpdateArgs
  ): Promise<PrismaTestimonial> {
    return this.prisma.testimonial.update(args);
  }
  async deleteTestimonial(
    args: Prisma.TestimonialDeleteArgs
  ): Promise<PrismaTestimonial> {
    return this.prisma.testimonial.delete(args);
  }

  async getPortfolio(parentId: string): Promise<PrismaPortfolio | null> {
    return this.prisma.testimonial
      .findUnique({
        where: { id: parentId },
      })
      .portfolio();
  }
}
