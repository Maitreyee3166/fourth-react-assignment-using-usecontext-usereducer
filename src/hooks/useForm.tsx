import { useContext } from "react";
import CreateFormContext from "../context/form/CreateFormContext";

export const useForm = () => {
  const context = useContext(CreateFormContext);

  if (!context) {
    throw new Error("useFormContext must be used inside FormProvider");
  }

  return context;
};

export default useForm;