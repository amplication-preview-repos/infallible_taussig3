import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VitalSignsServiceBase } from "./base/vitalSigns.service.base";

@Injectable()
export class VitalSignsService extends VitalSignsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
