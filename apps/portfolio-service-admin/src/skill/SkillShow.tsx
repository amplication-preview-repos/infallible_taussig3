import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PORTFOLIO_TITLE_FIELD } from "../portfolio/PortfolioTitle";

export const SkillShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Portfolio"
          source="portfolio.id"
          reference="Portfolio"
        >
          <TextField source={PORTFOLIO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Proficiency Level" source="proficiencyLevel" />
        <TextField label="Skill Name" source="skillName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
