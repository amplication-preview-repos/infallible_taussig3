import { Skill as TSkill } from "../api/skill/Skill";

export const SKILL_TITLE_FIELD = "skillName";

export const SkillTitle = (record: TSkill): string => {
  return record.skillName?.toString() || String(record.id);
};
