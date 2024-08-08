import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="portfolio.id"
          reference="Portfolio"
          label="Portfolio"
        >
          <SelectInput optionText={PortfolioTitle} />
        </ReferenceInput>
        <TextInput label="Project Name" source="projectName" />
        <TextInput
          label="Technologies Used"
          multiline
          source="technologiesUsed"
        />
      </SimpleForm>
    </Create>
  );
};
