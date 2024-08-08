import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const VitalSignsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bloodPressure" source="bloodPressure" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="heartAge" source="heartAge" />
        <TextField label="heartRate" source="heartRate" />
        <TextField label="heartRateVariability" source="heartRateVariability" />
        <TextField label="ID" source="id" />
        <TextField label="respirationRate" source="respirationRate" />
        <TextField label="spO2" source="spO2" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
