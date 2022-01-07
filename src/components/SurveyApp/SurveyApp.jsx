import { Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Layout, SingleSurvey } from '..';
import SURVEY from '../../Survey.json';

const SurveyApp = ({ userInfo }) => {
  const [surveyFinish, setSurveyFinish] = useState(false);
  const [surveyItem, setSurveyItem] = useState({
    id: '',
    question: '',
    option: [],
  });
  const [surveyAwnser, setSurveyAwnser] = useState({});
  const [updateSurvay, setUpdateSurvay] = useState(true);

  useEffect(() => {
    if (updateSurvay) {
      setSurveyAwnser(JSON.parse(localStorage.getItem('survayAwnser')));
      setUpdateSurvay(false);
    }
    localStorage.setItem('survayAwnser', JSON.stringify(surveyAwnser));
  }, [surveyAwnser]);

  useEffect(() => {
    setSurveyFinish(localStorage.getItem('finish'));
  }, []);

  if (surveyFinish) {
    const dataToLog = {
      userInfo,
      surveyAwnser,
    };
    console.log(dataToLog);
  }

  return (
    <div className="SurveyApp">
      {!surveyFinish ? (
        <Layout setSurveyItem={setSurveyItem} setSurveyFinish={setSurveyFinish} SURVEY={SURVEY}>
          <SingleSurvey
            surveyItem={surveyItem}
            setSurveyAwnser={setSurveyAwnser}
            surveyAwnser={surveyAwnser}
          />
        </Layout>
      ) : (
        <Box bgcolor="primary.dark" width="100vw" height="100vh" textAlign="center">
          <Typography color="success.light" variant="h3">
            Thank you for Your comment, your comment successfuly submited
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default SurveyApp;
