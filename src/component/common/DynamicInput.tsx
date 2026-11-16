import TextField from "@mui/material/TextField";
import type React from "react";
import type { DynamicInputProps } from "../../types/interface/form.interface";

const DynamicInput: React.FC<DynamicInputProps> = ({
  label,
  type,
  placeholder,
  register,
  error,
  helperText,
}) => {
  return (
    <div>
      <TextField
        type={type}
        label={label}
        placeholder={placeholder}
        {...register}
        error={error}
        helperText={helperText}
        fullWidth
      ></TextField>
    </div>
  );
};

export default DynamicInput;