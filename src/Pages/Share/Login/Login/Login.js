import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';
import loginimg from '../../../../images/login.png';
import { NavLink } from 'react-router-dom';
const Login = () => {
    const [loginData, setLoginData] = useState({})

    const handlerToOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);

    }
    const handlerLoginSubmit = e => {
        console.log(loginData);
        alert('hhdddddhhh');
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 14 }}>
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        LOGIN
                    </Typography>
                    <form onSubmit={handlerLoginSubmit}>
                        <TextField onChange={handlerToOnchange} sx={{ width: '75%', m: 1 }} id="standard-basic" name="email" label="Your Email" variant="standard" />
                        <TextField onChange={handlerToOnchange} sx={{ width: '75%', m: 1 }} id="standard-basic" name="password" type="password" label="Password" variant="standard" />
                        <Button type="submit" sx={{ color: '#ffff', backgroundImage: "linear-gradient(to right,#18D2B5, #11CFE3)", padding: "6px 22px", width: '75%', m: 1 }} >Login</Button>

                        <NavLink to="/register" style={{ textDecoration: 'none' }}> <Button type="text" sx={{ color: "#11CFE3", width: '75%', m: 1, fontSize: '14px' }} >NEW USER? PLEASE REGISTER</Button></NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={loginimg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;