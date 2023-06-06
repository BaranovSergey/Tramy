import {Box, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import React, {useState} from "react";
import {Field} from "react-final-form";
import BasicDateRangePicker from "../ui/data";
import MapGlCustom from "../ui/map/ui";
import CampingTable from "../../camping-table/ui";
import HikingItems from "../../add-items/add-items";
export function getSteps() {
    return [
        "Тип похода",
        "Выбор даты",
        "Распределение вещей",
        "Создание группы",
        "Загрузка маршрута",
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
                                    <FormControlLabel value={'0'} control={<Radio/>} label="Водный"/>
                                    <FormControlLabel value={'1'} control={<Radio/>} label="Горный"/>
                                    <FormControlLabel value={'2'} control={<Radio/>} label="Лесной"/>
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
                <Box
                    sx={{
                        marginTop: 25,
                        marginBottom: 20
                    }}
                >
                    <>
                        <HikingItems/>
                    </>
                </Box>
            );
        case 3:
            return (
                <Box
                    sx={{
                        marginTop: 25,
                        marginBottom: 20
                    }}
                >
                    <>
                        <CampingTable/>
                    </>
                </Box>
            );

        case 4:
            return (
                <Box
                    sx={{
                        marginTop: 25,
                        marginBottom: 20
                    }}
                >
                <>
                    <MapGlCustom/>
                </>
                </Box>

            )

    }
}
