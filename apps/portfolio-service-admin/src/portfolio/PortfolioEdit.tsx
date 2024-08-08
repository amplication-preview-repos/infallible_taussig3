import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";
import { SkillTitle } from "../skill/SkillTitle";
import { TestimonialTitle } from "../testimonial/TestimonialTitle";

export const PortfolioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Contact Email" source="contactEmail" type="email" />
        <TextInput label="Introduction" multiline source="introduction" />
        <TextInput label="Owner Name" source="ownerName" />
        <ReferenceArrayInput
          source="projects"
          reference="Project"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="skills"
          reference="Skill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="testimonials"
          reference="Testimonial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TestimonialTitle} />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
