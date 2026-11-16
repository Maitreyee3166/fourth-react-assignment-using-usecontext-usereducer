
import { useForm as useFormHook } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Button,
  Typography,
  Grid,
} from "@mui/material";

import {
  ArrowRight,
} from "lucide-react";

import DynamicInput from "./common/DynamicInput";
import useForm from "../hooks/useForm";

import type { PersonalInfoInputType } from "../types/interface/form.interface";
import { personalInfoSchema } from "../service/validation/form.validation";
import { PersonalInfoInputData } from "../service/json/personal.input";

const PersonalInfo = () => {
  const {
    formState,
    handleUpdatePersonalInfo,
    handleNextStep,
  } = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormHook<PersonalInfoInputType>({
    resolver: yupResolver(personalInfoSchema),
    defaultValues: formState.formData.personalInfo,
  });

  const onSubmit = (data: PersonalInfoInputType) => {
    handleUpdatePersonalInfo(data);
    handleNextStep();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          color="#172554"
          sx={{mb: "5px", fontWeight: "700px"}}
       
        >
          Personal Information
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Please provide your basic personal details to get started.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {PersonalInfoInputData.map((input) => (
          <Grid
            size={{ xs: 12, sm: 6 }}
            key={input.name}
          >
            <DynamicInput
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              error={!!errors[input.name]}
              helperText={errors[input.name]?.message}
              register={register(input.name)}
        
            />
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        type="submit"
        fullWidth
        endIcon={<ArrowRight size={18} />}
        sx={{
          py: 1.5,
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 700,
          fontSize: "16px",
          background: "linear-gradient(135deg, #2563eb, #4f46e5)",
          boxShadow: "0 5px 15px rgba(37, 99, 235, 0.2)",
          "&:hover": {
            background: "linear-gradient(135deg, #1d4ed8, #4338ca)",
          },
        }}
      >
        Continue to Address
      </Button>
    </Box>
  );
};

export default PersonalInfo;
