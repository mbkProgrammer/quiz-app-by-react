/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { LoginForm, SurveyApp } from '../components';
import theme from '../config/theme';

const App = () => {
  const [start, setStart] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
  }, []);

  const handleStart = () => {
    setStart(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {!userInfo
          ? !start ? (
            <Button size="large" variant="contained" onClick={handleStart}>
              Start
            </Button>
          ) : (
            <LoginForm setUserInfo={setUserInfo} />
          ) : (
            <SurveyApp userInfo={userInfo} />
          )}
      </div>
    </ThemeProvider>
  );
};

export default App;
