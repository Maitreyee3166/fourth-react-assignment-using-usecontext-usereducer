
import type { PersonalInfoField } from "../../types/interface/form.interface";

export const PersonalInfoInputData: PersonalInfoField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter Last Name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter Email",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter Phone Number",
  },
];
