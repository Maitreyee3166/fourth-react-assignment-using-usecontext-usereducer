import * as yup from "yup";

export const personalInfoSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
});

export const addressSchema = yup.object({
    street: yup.string().required("Street is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    PINCode: yup
      .string()
      .matches(/^[0-9]{6}$/, "ZIP code must be 6 digits")
      .required("ZIP code is required"),
  });