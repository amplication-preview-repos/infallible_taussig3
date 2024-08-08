import { Module } from "@nestjs/common";
import { VitalSignsModuleBase } from "./base/vitalSigns.module.base";
import { VitalSignsService } from "./vitalSigns.service";
import { VitalSignsController } from "./vitalSigns.controller";
import { VitalSignsResolver } from "./vitalSigns.resolver";

@Module({
  imports: [VitalSignsModuleBase],
  controllers: [VitalSignsController],
  providers: [VitalSignsService, VitalSignsResolver],
  exports: [VitalSignsService],
})
export class VitalSignsModule {}
