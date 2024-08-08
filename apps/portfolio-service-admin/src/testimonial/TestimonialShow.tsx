import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PORTFOLIO_TITLE_FIELD } from "../portfolio/PortfolioTitle";

export const TestimonialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Client Name" source="clientName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Feedback" source="feedback" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Portfolio"
          source="portfolio.id"
          reference="Portfolio"
        >
          <TextField source={PORTFOLIO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
