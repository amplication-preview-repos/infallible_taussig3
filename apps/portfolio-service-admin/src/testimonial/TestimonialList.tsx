import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PORTFOLIO_TITLE_FIELD } from "../portfolio/PortfolioTitle";

export const TestimonialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Testimonials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
