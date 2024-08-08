import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const VitalSignsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bloodPressure" source="bloodPressure" />
        <NumberInput step={1} label="heartAge" source="heartAge" />
        <NumberInput step={1} label="heartRate" source="heartRate" />
        <NumberInput
          label="heartRateVariability"
          source="heartRateVariability"
        />
        <NumberInput label="respirationRate" source="respirationRate" />
        <NumberInput label="spO2" source="spO2" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
