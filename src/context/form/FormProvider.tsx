import { useReducer, type ReactNode } from "react";
import CreateFormContext from "./CreateFormContext";
import { formInitialState, formReducer } from "../../reducer/form.reducer";
import type {
  AddressInfoInputType,
  PersonalInfoInputType,
} from "../../types/interface/form.interface";
import { toast } from "sonner";

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formState, formDispatch] = useReducer(formReducer, formInitialState);

  const handleNextStep = () => {
    formDispatch({ type: "NEXT_STEP" });
  };

  const handlePreviousStep = () => {
    formDispatch({ type: "PREVIOUS_STEP" });
  };

  const handleUpdatePersonalInfo = (data: PersonalInfoInputType) => {
    Object.entries(data).forEach(([field, value]) => {
      formDispatch({
        type: "UPDATE_FIELD",
        payload: {
          section: "personalInfo",
          field,
          value,
        },
      });
    });
  };

  const handleUpdateAddress = (data: AddressInfoInputType) => {
    Object.entries(data).forEach(([field, value]) => {
      formDispatch({
        type: "UPDATE_FIELD",
        payload: {
          section: "address",
          field,
          value,
        },
      });
    });
  };

  const handleSubmit = () => {
    console.log("Submitted Form Data:", formState.formData);
    toast.success("Form submitted successfully!", {
      description: "Your information has been saved.",
    });
  };

  return (
    <CreateFormContext
      value={{
        formState,
        handleNextStep,
        handlePreviousStep,
        handleUpdatePersonalInfo,
        handleUpdateAddress,
        handleSubmit,
      }}
    >
      {children}
    </CreateFormContext>
  );
};

export default FormProvider;
