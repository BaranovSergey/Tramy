import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react";
import {login} from "../../actions/user";



const theme = createTheme();

export default function SignIn() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleOnChangeUserName = (event) => {
        setUserName(event.target.value);
    };
    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    if (username !== "" && password !== ""){
        login(username,password)
    }else {
        alert("Заполните пустые поля")
    }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            value={username}
                            onChange={handleOnChangeUserName}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            value={password}
                            onChange={handleOnChangePassword}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Запомнить меня"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Войти
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Забыли пароль?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Нет аккаунта? Зарегистрироваться"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

// import React, {useState} from 'react';
// import './authorization.css'
// import Input from "../../utils/input";
// import {login} from "../../actions/user";
//
// const Login = () => {
//     const [username, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//
//     return (
//         <div className='authorization'>
//             <div className="authorization__header">Авторизация</div>
//             <Input value={username} setValue={setEmail} type="text" placeholder="Введите email..."/>
//             <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
//             <button className="authorization__btn" onClick={() => login(username, password)}>Войти</button>
//         </div>
//     );
// };
// export default Login;