import * as React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {Field} from "react-final-form";
import DateRangePicker from "@mui/lab/DateRangePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {useEffect} from "react";
import {useSelector} from "react-redux";

export default function BasicDateRangePicker() {
    const [value, setValue] = React.useState([null, null]);

    const endStartDates = useSelector(state => state.finalForm.createHike.values.endStartDates);

    useEffect(() => {
        console.log('endStartDates', endStartDates);
    }, [endStartDates])

    useEffect(() => {
        // если использовать useEffect с пустыми значениями на прослушивание - то он будет работать как
        // жизненный цикл монтирования компонента componentDidMount

        // ложь, а именно false - undefined, null , 0 , '' - пустая строка, [] - пустой массив
        if (endStartDates) {
            setValue([...endStartDates]);
        } else {
            setValue([null, null]);
        }
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    display: 'flex',
                }}
            >
                <Field name="endStartDates">
                    {({input, meta}) => (

                        <DateRangePicker
                            startText="Дата начала"
                            endText="Дата конца"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue); // меняем локальное состояние, потому что Final form не может взять это значение
                                input.onChange(newValue); // прокидываем значение в final form - оно будет лежать в главном объекте нашей формы по имени свойства endStartDates
                            }}
                            renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <TextField {...startProps} />
                                    <Box sx={{mx: 2}}> до </Box>
                                    <TextField {...endProps} />
                                </React.Fragment>
                            )}
                        />
                    )}
                </Field>
            </Box>
        </LocalizationProvider>
    );
}