import { Box, Paper, Typography } from "@mui/material";

import useForm from "../hooks/useForm";
import StepIndicator from "../component/StepIndicator";
import PersonalInfo from "../component/PersonalInfo";
import Address from "../component/Address";
import Review from "../component/Review";

const MultiStepForm = () => {
  const { formState } = useForm();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 550,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" sx={{ mb: "5px" }}>
          Registration Form
        </Typography>

        <Typography sx={{ mb: "10px" }}>
          Complete all steps to submit your information
        </Typography>

        <StepIndicator />

        {formState.currentStep === 1 && <PersonalInfo />}

        {formState.currentStep === 2 && <Address />}

        {formState.currentStep === 3 && <Review />}
      </Paper>
    </Box>
  );
};

export default MultiStepForm;
