import { Box, Typography } from "@mui/material";
import useForm from "../hooks/useForm";
import { steps } from "../service/json/form.json";

const StepIndicator = () => {
  const { formState } = useForm();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const active = formState.currentStep >= stepNumber;

        return (
          <Box
            key={step}
            sx={{ textAlign: "center", flex: 1 }}
          >
            <Box
              sx={{
                width: 35,
                height: 35,
                borderRadius: "50%",
                backgroundColor: active ? "primary.main" : "#ddd",
                color: active ? "white" : "#555",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 1,
              }}
            >
              {stepNumber}
            </Box>

            <Typography
              variant="body2"
              color={active ? "primary.main" : "text.secondary"}
            >
              {step}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default StepIndicator;