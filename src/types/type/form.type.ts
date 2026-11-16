export type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "UPDATE_FIELD";
      payload: {
        section: "personalInfo" | "address";
        field: string;
        value: string;
      };
    };