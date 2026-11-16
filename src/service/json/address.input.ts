import type { AddressField } from "../../types/interface/form.interface";


export const AddressInputData: AddressField[] = [
  {
    name: "street",
    label: "Street Address",
    type: "text",
    placeholder: "Enter Street Address",
  },
  {
    name: "city",
    label: "City",
    type: "text",
    placeholder: "Enter Your City",
  },
  {
    name: "state",
    label: "State",
    type: "text",
    placeholder: "Enter State",
  },
  {
    name: "PINCode",
    label: "PIN Code",
    type: "text",
    placeholder: "Enter PIN Code",
  },
];