import React, {useState} from "react";
import {Button, Stepper, Step, StepLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Box, FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

function getSteps() {
    return [
        "Тип похода",
        "Выбор региона",
        "Ещё что-то"
    ];
}

function getStepContent(step){
    switch (step){
        case 0:
            return (
                <>
                    <Box
                        sx={{
                            marginTop: 25,
                            display: 'flex',
                            marginBottom: 20
                        }}
                    >
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="gender"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Водный" control={<Radio />} label="Водный" />
                            <FormControlLabel value="Горный" control={<Radio />} label="Горный" />
                            <FormControlLabel value="Лесной" control={<Radio />} label="Лесной" />
                        </RadioGroup>
                    </FormControl>
                    </Box>
                </>
            );
        case 1:
            return (
                <>
                    <Box
                        sx={{
                            marginTop: 25,
                            display: 'flex',
                            marginBottom: 20
                        }}
                    >
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="Russia" control={<Radio />} label="Russia" />
                            <FormControlLabel value="USA" control={<Radio />} label="USA" />
                            <FormControlLabel value="Europe" control={<Radio />} label="Europe" />
                        </RadioGroup>
                    </FormControl>
                    </Box>
                </>
            );
        case 2:
            return (
                <>
                    <Box
                        sx={{
                            marginTop: 25,
                            display: 'flex',
                            marginBottom: 20
                        }}
                    >
                        <FormControl component="fieldset">
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel value="что-нибудь" control={<Radio />} label="что-нибудь" />
                                <FormControlLabel value="что-нибудь" control={<Radio />} label="что-нибудь" />
                                <FormControlLabel value="что-нибудь" control={<Radio />} label="что-нибудь" />
                                <FormControlLabel value="что-нибудь" control={<Radio />} label="что-нибудь" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </>
            )
        default: return "unknown step"
    }
}

const LinaerStepper = () => {
    const [activeStep, setActiveStep] = useState(0)
    const steps = getSteps();
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return <div>
        <Stepper activeStep={activeStep}>
            {
                steps.map((step, index) => {
                    return (
                        <Step>
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
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button variant={"outlined"} onClick={handleBack} disabled={activeStep === 0}>Предыдущий шаг</Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button variant={"contained"} onClick={handleNext}>{activeStep === 2 ? "Завершить" : "Следуюющий шаг"}</Button>
                    </Box>
                </>
            )}
    </div>
}

export default LinaerStepper;