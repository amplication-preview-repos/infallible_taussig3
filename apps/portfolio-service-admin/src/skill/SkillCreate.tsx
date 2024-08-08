import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const SkillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="portfolio.id"
          reference="Portfolio"
          label="Portfolio"
        >
          <SelectInput optionText={PortfolioTitle} />
        </ReferenceInput>
        <TextInput label="Proficiency Level" source="proficiencyLevel" />
        <TextInput label="Skill Name" source="skillName" />
      </SimpleForm>
    </Create>
  );
};
