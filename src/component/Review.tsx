
import {
  Box,
  Button,
  Typography,
  Divider,
  Paper,
} from "@mui/material";

import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  MapPinned,
  ArrowLeft,
  Send,
} from "lucide-react";

import useForm from "../hooks/useForm";

const Review = () => {
  const {
    formState,
    handlePreviousStep,
    handleSubmit,
  } = useForm();

  const { personalInfo, address } = formState.formData;

  const DetailItem = ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        p: 1.5,
        borderRadius: 2,
        backgroundColor: "#f8fafc",
      }}
    >
      <Box
        sx={{
          color: "#4f46e5",
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="caption"
          color="text.secondary"
        >
          {label}
        </Typography>

        <Typography
          variant="body2"
          sx={{ overflowWrap: "anywhere" }}
        >
          {value || "Not provided"}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 1 }}>

        <Typography
          variant="h5"
          color="#172033"
        >
          Review Your Details
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Please check your information before submitting.
        </Typography>
      </Box>

      {/* Personal Information Card */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 2.5 },
          border: "1px solid #e2e8f0",
          borderRadius: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2,
              backgroundColor: "#eef2ff",
              color: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <UserRound size={22} />
          </Box>

          <Box>
            <Typography>
              Personal Information
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Your basic contact details
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 1.5,
          }}
        >
          <DetailItem
            label="First Name"
            value={personalInfo.firstName}
            icon={<UserRound size={19} />}
          />

          <DetailItem
            label="Last Name"
            value={personalInfo.lastName}
            icon={<UserRound size={19} />}
          />

          <DetailItem
            label="Email Address"
            value={personalInfo.email}
            icon={<Mail size={19} />}
          />

          <DetailItem
            label="Phone Number"
            value={personalInfo.phone}
            icon={<Phone size={19} />}
          />
        </Box>
      </Paper>

      {/* Address Information Card */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 2.5 },
          border: "1px solid #e2e8f0",
          borderRadius: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2,
              backgroundColor: "#fff7ed",
              color: "#ea580c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MapPinned size={22} />
          </Box>

          <Box>
            <Typography>
              Address Information
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Your residential address
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 1.5,
          }}
        >
          <Box>
            <DetailItem
              label="Street Address"
              value={address.street}
              icon={<MapPin size={19} />}
            />
          </Box>

          <DetailItem
            label="City"
            value={address.city}
            icon={<MapPin size={19} />}
          />

          <DetailItem
            label="State"
            value={address.state}
            icon={<MapPin size={19} />}
          />

          <DetailItem
            label="PIN Code"
            value={address.PINCode}
            icon={<MapPin size={19} />}
          />
        </Box>
      </Paper>

      <Divider />

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
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
          fullWidth
          onClick={handleSubmit}
          endIcon={<Send size={17} />}
          sx={{
            py: 1.4,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            backgroundColor: "#4f46e5",
            boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)",
            "&:hover": {
              backgroundColor: "#4338ca",
            },
          }}
        >
          Submit Details
        </Button>
      </Box>
    </Box>
  );
};

export default Review;
