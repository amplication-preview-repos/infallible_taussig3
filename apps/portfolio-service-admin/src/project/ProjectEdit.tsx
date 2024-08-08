import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
