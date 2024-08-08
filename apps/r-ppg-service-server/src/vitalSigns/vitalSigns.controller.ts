import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VitalSignsService } from "./vitalSigns.service";
import { VitalSignsControllerBase } from "./base/vitalSigns.controller.base";

@swagger.ApiTags("vitalSigns")
@common.Controller("vitalSigns")
export class VitalSignsController extends VitalSignsControllerBase {
  constructor(protected readonly service: VitalSignsService) {
    super(service);
  }
}
