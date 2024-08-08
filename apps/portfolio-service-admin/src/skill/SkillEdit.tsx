import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const SkillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
