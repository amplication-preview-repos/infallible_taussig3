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

export const TestimonialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Client Name" source="clientName" />
        <TextInput label="Feedback" multiline source="feedback" />
        <ReferenceInput
          source="portfolio.id"
          reference="Portfolio"
          label="Portfolio"
        >
          <SelectInput optionText={PortfolioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
