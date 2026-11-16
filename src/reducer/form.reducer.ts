import type { FormState } from "../types/interface/form.interface";
import type { FormAction } from "../types/type/form.type";

export const formInitialState: FormState = {
  currentStep: 1,

  formData: {
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },

    address: {
      street: "",
      city: "",
      state: "",
      PINCode: "",
    },
  },
};

export const formReducer = (
  state: FormState,
  action: FormAction
): FormState => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, 3),
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 1),
      };

    case "UPDATE_FIELD": {
      const { section, field, value } = action.payload;

      return {
        ...state,
        formData: {
          ...state.formData,
          [section]: {
            ...state.formData[section],
            [field]: value,
          },
        },
      };
    }

    default:
      return state;
  }
};