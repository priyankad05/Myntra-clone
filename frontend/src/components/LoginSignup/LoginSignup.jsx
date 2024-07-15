import React, { useState } from 'react';
import { Button, Card, CardMedia, TextField, Typography } from '@mui/material';
import './LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        console.log("Token stored:", localStorage.getItem('auth-token'));
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login. Please try again.");
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffe6e6' }} className='text-center mt-2'>
      <Card className='m-4 col-5 d-inline-block'>
        <CardMedia
          component="img"
          height="200"
          image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png"
          alt="login banner"
        />
        <div className='col-10 m-auto mt-4'>
          <Typography className='d-flex justify-content-start'>
            <p style={{ fontSize: '20px' }}>
              <b style={{ fontSize: '25px', color: '#505050', marginRight: '5px' }}>{state}</b>
            </p> 
          </Typography>
          {state === "Sign Up" && (
            <TextField
              name='username'
              value={formData.username}
              onChange={changeHandler}
              label="Username"
              variant="outlined"
              fullWidth
              className='d-flex justify-content-start mt-2'
            />
          )}
          <TextField
            name='email'
            value={formData.email}
            onChange={changeHandler}
            label="Email Address"
            variant="outlined"
            type="email"
            fullWidth
            className='d-flex justify-content-start mt-2'
          />
          <TextField
            name='password'
            value={formData.password}
            onChange={changeHandler}
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            className='d-flex justify-content-start mt-2'
          />
          <Typography className='d-flex justify-content-start mt-4'>
            <p style={{ fontSize: '15px', color: '#707070', textAlign: 'left' }}>
              By continuing, I agree to the
              <b style={{ fontSize: '20px', color: '#ff0066', marginLeft: '6px' }}>Terms of use</b> &
              <b style={{ fontSize: '20px', color: '#ff0066', marginLeft: '6px' }}>Privacy Policy</b>
            </p>
          </Typography>
          <Button
            style={{ backgroundColor: '#ff0066', color: 'white' }}
            fullWidth
            onClick={() => { state === "Login" ? login() : signup() }}
          >
            <b style={{ fontSize: '20px' }}>Continue</b>
          </Button>
          <Typography className='d-flex justify-content-start mt-4'>
            <p style={{ fontSize: '15px', color: '#707070', textAlign: 'left' }}>
              {state === "Sign Up" ? (
                <>Already have an account? <b style={{ color: '#ff0066' }} onClick={() => { setState("Login") }}>Login Here</b></>
              ) : (
                <>Create an account? <b style={{ color: '#ff0066' }} onClick={() => { setState("Sign Up") }}>Click here</b></>
              )}
            </p>
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default LoginSignup;