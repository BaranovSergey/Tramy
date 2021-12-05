import React, {useState} from "react";
import {Button, Stepper, Step, StepLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Box} from "@material-ui/core";
import {getStepContent, getSteps} from "../modal";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  stepperContainer: {
    paddingTop:'5%',
    width: '80%'
  }
}))

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={classes.root}>
      <div className={classes.stepperContainer}>
        <Stepper activeStep={activeStep}>
          {
            steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
        </Stepper>
        {
          activeStep === 3 ? (
            <Typography variant="h3" align={"center"}>SPASIBO BOLSHOI</Typography>
          ) : (
            <>
              <form>{getStepContent(activeStep)}</form>
              <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                <Button variant={"outlined"} onClick={handleBack} disabled={activeStep === 0}>Предыдущий шаг</Button>
                <Box sx={{flex: '1 1 auto'}}/>
                <Button variant={"contained"}
                        onClick={handleNext}>{activeStep === 2 ? "Завершить" : "Следуюющий шаг"}</Button>
              </Box>
            </>
          )}
      </div>
    </div>
  );
};

export default LinaerStepper;
