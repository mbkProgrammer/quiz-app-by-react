/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Button, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import { validationEmail, validationText } from '../../utils/Validation';

const LoginForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleNameChange = (event) => {
    setNameError(validationText(name));
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailError(validationEmail(email));
    setEmail(event.target.value);
  };

  const submitLogin = () => {
    if (nameError && emailError) {
      const userInfo = {
        userName: name,
        userEmail: email,
      };
      setUserInfo({ userInfo });
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
  };

  return (
    <Box sx={{ backgroundColor: 'primary.light', padding: '20px 10px', borderRadius: '10px' }}>
      <FormControl>
        <TextField onChange={handleNameChange} label="Name" error={!nameError} variant="outlined" type="name" margin="normal" autoComplete="nickname" />
        <TextField onChange={handleEmailChange} label="Email" error={!emailError} type="email" variant="outlined" margin="normal" autoComplete="email" />
        <Button variant="contained" onClick={submitLogin} color="secondary" sx={{ marginTop: '10px' }}>Submit</Button>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
