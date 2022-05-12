import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import "./ClinicStepper.css";
import PersonalDetail from "./PersonalDetail";
import ClinicDetail from "./ClinicDetail";
import Availability from "./Availability";
import { Link } from "react-router-dom";

const steps = ["Personal Details", "Clinic Details/Location", "Availability"];
const ClinicStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalDetail />;
      case 1:
        return <ClinicDetail />;
      case 2:
        return <Availability />;
      default:
        return "Unknown Page";
    }
  }
  return (
    <div className="clinic_stepper_screen">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Back to <Link to="/">home</Link>
            </Typography>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                pt: 2,
              }}
            >
              <button className="stepper_btn" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Save & Next"}
              </button>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};

export default ClinicStepper;
