import React, { useState, useEffect } from 'react';
import { Container, Button, Box } from '@mui/material';
import { Time } from '..';

const Layout = ({
  setSurveyFinish, children, setSurveyItem, SURVEY,
}) => {
  const [surveyIndex, setSurveyIndex] = useState(0);

  useEffect(() => {
    if (SURVEY.length > surveyIndex) {
      setSurveyItem(SURVEY[surveyIndex]);
    } else {
      setSurveyFinish(true);
      localStorage.setItem('finish', true);
    }
  }, [surveyIndex]);

  return (
    <Container
      className="Layout"
      sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-around', minHeight: '100vh', alignItems: 'center',
      }}
    >
      <header>
        <Time setSurveyFinish={setSurveyFinish} />
      </header>
      {children}
      <Box sx={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
      }}
      >
        <Button onClick={() => setSurveyIndex(surveyIndex + 1)} variant="contained" color="secondary">
          Next
        </Button>
        <Button onClick={() => setSurveyIndex(surveyIndex - 1)} disabled={surveyIndex === 0} variant="contained" color="secondary">
          Back
        </Button>
      </Box>
    </Container>
  );
};

export default Layout;
