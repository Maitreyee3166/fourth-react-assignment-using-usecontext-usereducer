
import { useForm as useFormHook } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Button,
  Typography,
  Divider,
} from "@mui/material";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import DynamicInput from "./common/DynamicInput";

import type { AddressInfoInputType } from "../types/interface/form.interface";

import { addressSchema } from "../service/validation/form.validation";
import { AddressInputData } from "../service/json/address.input";

import useForm from "../hooks/useForm";

const Address = () => {
  const {
    formState,
    handleUpdateAddress,
    handleNextStep,
    handlePreviousStep,
  } = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormHook<AddressInfoInputType>({
    resolver: yupResolver(addressSchema),
    defaultValues: formState.formData.address,
  });

  const onSubmit = (data: AddressInfoInputType) => {
    handleUpdateAddress(data);
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
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 1 }}>
      

        <Typography
          variant="h5"
          color="#172033"
        >
          Address Details
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.8 }}
        >
          Please provide your current residential address.
        </Typography>
      </Box>

      <Divider />

      {/* Address Inputs */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
          },
          gap: 2.5,
        }}
      >
        {AddressInputData.map((input) => (
          <Box
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
          </Box>
        ))}
      </Box>


      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 1,
        }}
      >
        <Button
          variant="outlined"
          fullWidth
          onClick={handlePreviousStep}
          startIcon={<ArrowLeft size={18} />}
          sx={{
            py: 1.4,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            borderColor: "#cbd5e1",
            color: "#475569",
          }}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          type="submit"
          fullWidth
          endIcon={<ArrowRight size={18} />}
          sx={{
            py: 1.4,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            backgroundColor: "#4f46e5",
            boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)",
            "&:hover": {
              backgroundColor: "#4338ca",
              boxShadow: "0 6px 16px rgba(79, 70, 229, 0.3)",
            },
          }}
        >
          Continue to Review
        </Button>
      </Box>
    </Box>
  );
};

export default Address;
