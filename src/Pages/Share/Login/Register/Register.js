import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';
import loginimg from '../../../../images/login.png';
import { NavLink } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import useAuth from '../../../hook/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
const Register = () => {
    const { user, handlerRegisterToEmail, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});

    const handlerToOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handlerLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return;
        }
        handlerRegisterToEmail(loginData.email, loginData.password);
        e.preventDefault();
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6} sx={{ mt: 14 }}>
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                            REGISTER
                        </Typography>
                        {!isLoading && <form onSubmit={handlerLoginSubmit}>
                            <TextField onChange={handlerToOnchange} sx={{ width: '75%', m: 1 }} id="standard-basic" name="email" label="Your Email" variant="standard" />
                            <TextField onChange={handlerToOnchange} sx={{ width: '75%', m: 1 }} id="standard-basic" name="password" type="password" label="Password" variant="standard" />
                            <TextField onChange={handlerToOnchange} sx={{ width: '75%', m: 1 }} id="standard-basic" name="password2" type="password" label="Re-type Your Password" variant="standard" />
                            <Button type="submit" sx={{ color: '#ffff', backgroundImage: "linear-gradient(to right,#18D2B5, #11CFE3)", padding: "6px 22px", width: '75%', m: 1 }} >REGISTER</Button>
                            <NavLink to="/login" style={{ textDecoration: 'none' }}> <Button type="text" sx={{ width: '75%', m: 1, color: "#11CFE3" }} >ALREADY REGISTERED? PLEASE LOGIN</Button></NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {
                            user.email && <Alert severity="success">
                                User Created <strong>Successfully</strong>
                            </Alert>
                        }
                        {
                            authError && <Alert severity="success">
                                {authError}
                            </Alert>
                        }
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%" }} src={loginimg} alt="" />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;