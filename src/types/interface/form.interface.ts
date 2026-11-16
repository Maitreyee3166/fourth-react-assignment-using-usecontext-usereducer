import type { UseFormRegisterReturn } from "react-hook-form";

export interface AddressInfoInputType {
  street: string;
  city: string;
  state: string;
  PINCode: string;
}

export interface AddressField {
  name: keyof AddressInfoInputType;
  label: string;
  type: "text";
  placeholder: string;
}


export interface PersonalInfoInputType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface PersonalInfoField {
  name: keyof PersonalInfoInputType;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
}

export interface FormData {
  personalInfo: PersonalInfoInputType;
  address: AddressInfoInputType;
}

export interface FormState {
  currentStep: number;
  formData: FormData;
}

export interface FormContextType {
  formState: FormState;

  handleNextStep: () => void;
  handlePreviousStep: () => void;

  handleUpdatePersonalInfo: (data: PersonalInfoInputType) => void;
  handleUpdateAddress: (data: AddressInfoInputType) => void;

  handleSubmit: () => void;
}

export interface DynamicInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: boolean;
  helperText?: string;
}