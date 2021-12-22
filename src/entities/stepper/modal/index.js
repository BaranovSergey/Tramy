import {Box, FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import React from "react";
import {Field} from "react-final-form";
import BasicDateRangePicker from "../ui/data";
import SearchUser from "../ui/searchUser";

export function getSteps() {
    return [
        "Тип похода",
        "Выбор даты",
        "Создание группы",
        "Загрузка маршрута"
    ];
}

export function getStepContent(step) {
    switch (step) {
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
                        {/*name - это значение ключа для названия в объекте values*/}
                        <Field name="state">
                            {({input, meta}) => (
                                <RadioGroup
                                    aria-label="quiz"
                                    name="quiz"
                                    value={input.value}
                                    onChange={input.onChange}
                                >
                                    <FormControlLabel value="Водный" control={<Radio/>} label="Водный"/>
                                    <FormControlLabel value="Горный" control={<Radio/>} label="Горный"/>
                                    <FormControlLabel value="Forest" control={<Radio/>} label="Лесной"/>
                                </RadioGroup>
                            )}
                        </Field>
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
                        <BasicDateRangePicker/>
                    </Box>
                </>
            );
        case 2:
            return (
                <>
                    <Box
                        sx={{
                            marginTop: 25,
                            marginBottom: 20,
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <SearchUser/>
                    </Box>
                </>
            )
        default:
            return "unknown step"
    }
}
