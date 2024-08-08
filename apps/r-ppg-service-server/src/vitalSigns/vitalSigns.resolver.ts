import * as graphql from "@nestjs/graphql";
import { VitalSignsResolverBase } from "./base/vitalSigns.resolver.base";
import { VitalSigns } from "./base/VitalSigns";
import { VitalSignsService } from "./vitalSigns.service";

@graphql.Resolver(() => VitalSigns)
export class VitalSignsResolver extends VitalSignsResolverBase {
  constructor(protected readonly service: VitalSignsService) {
    super(service);
  }
}
