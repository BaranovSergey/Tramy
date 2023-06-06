import React, {useEffect, useState} from "react";
import {Button, Stepper, Step, StepLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Box} from "@material-ui/core";
import {getStepContent, getSteps} from "../lib/helper";
import {makeStyles} from "@mui/styles";
import FinishBtn from "./FinishBtn";
import NextBtn from "./NextBtn";
import {Form, Field} from "react-final-form";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import FormStateToRedux from "../../../shared/lib/FormStateToRedux";

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    stepperContainer: {
        paddingTop: '5%',
        width: '80%'
    }
}))

const LinaerStepper = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0)
    const navigate = useNavigate();

    const isUserAuthenticated = useSelector(state => state.auth.accessToken !== '');
    useEffect(() => {
        if (!isUserAuthenticated) {
            navigate('/login')
        }
    }, [isUserAuthenticated])
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleOnSubmit = (values) => {
        console.log('values', values);
        /*здесь будет передача данных в метод который будет отправлять данные*/
    }

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
                    activeStep === 5 ? (
                        <Typography variant="h3" align={"center"}>Поход успешно создан</Typography>
                    ) : (
                        <>
                            <Form
                                onSubmit={handleOnSubmit}
                                render={({handleSubmit, form, submitting, pristine, values}) => (
                                    <form onSubmit={handleSubmit}>
                                        <FormStateToRedux form="createHike"/>
                                        {getStepContent(activeStep)}

                                        <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                            <Button variant={"outlined"} onClick={handleBack}
                                                    disabled={activeStep === 0}>Предыдущий шаг</Button>
                                            <Box sx={{flex: '1 1 auto'}}/>
                                            {activeStep === 4 ? <FinishBtn handleOnSubmit={handleSubmit}/> :
                                                <NextBtn handleNextStep={handleNext}/>}
                                        </Box>
                                    </form>
                                )}
                            />
                        </>
                    )}
            </div>
        </div>
    );
};

export default LinaerStepper;
