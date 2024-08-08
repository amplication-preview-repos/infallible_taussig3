/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Skill } from "./Skill";
import { SkillCountArgs } from "./SkillCountArgs";
import { SkillFindManyArgs } from "./SkillFindManyArgs";
import { SkillFindUniqueArgs } from "./SkillFindUniqueArgs";
import { CreateSkillArgs } from "./CreateSkillArgs";
import { UpdateSkillArgs } from "./UpdateSkillArgs";
import { DeleteSkillArgs } from "./DeleteSkillArgs";
import { Portfolio } from "../../portfolio/base/Portfolio";
import { SkillService } from "../skill.service";
@graphql.Resolver(() => Skill)
export class SkillResolverBase {
  constructor(protected readonly service: SkillService) {}

  async _skillsMeta(
    @graphql.Args() args: SkillCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Skill])
  async skills(@graphql.Args() args: SkillFindManyArgs): Promise<Skill[]> {
    return this.service.skills(args);
  }

  @graphql.Query(() => Skill, { nullable: true })
  async skill(
    @graphql.Args() args: SkillFindUniqueArgs
  ): Promise<Skill | null> {
    const result = await this.service.skill(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Skill)
  async createSkill(@graphql.Args() args: CreateSkillArgs): Promise<Skill> {
    return await this.service.createSkill({
      ...args,
      data: {
        ...args.data,

        portfolio: args.data.portfolio
          ? {
              connect: args.data.portfolio,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Skill)
  async updateSkill(
    @graphql.Args() args: UpdateSkillArgs
  ): Promise<Skill | null> {
    try {
      return await this.service.updateSkill({
        ...args,
        data: {
          ...args.data,

          portfolio: args.data.portfolio
            ? {
                connect: args.data.portfolio,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Skill)
  async deleteSkill(
    @graphql.Args() args: DeleteSkillArgs
  ): Promise<Skill | null> {
    try {
      return await this.service.deleteSkill(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Portfolio, {
    nullable: true,
    name: "portfolio",
  })
  async getPortfolio(
    @graphql.Parent() parent: Skill
  ): Promise<Portfolio | null> {
    const result = await this.service.getPortfolio(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
