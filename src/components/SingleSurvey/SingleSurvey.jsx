import React from 'react';
import {
  Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
} from '@mui/material';
import { motion } from 'framer-motion';

const SingleSurvey = ({ surveyItem, setSurveyAwnser, surveyAwnser }) => {
  const handleAwnser = (event) => {
    setSurveyAwnser((prevAwnser) => ({
      ...prevAwnser,
      [surveyItem.id]: event.target.value,
    }));
  };

  return (
    <Box sx={{
      backgroundColor: 'primary.main', minHeight: '400px', textAlign: 'left', borderRadius: '30px', padding: '10px 30px',
    }}
    >
      <motion.div
        key={surveyItem.id}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'tween',
          stiffness: 260,
          damping: 20,
        }}
      >
        <Typography variant="h4" sx={{ maxWidth: '80vw', wordWrap: 'break-word' }}>{surveyItem.question}</Typography>
      </motion.div>
      <FormControl component="fieldset" key={`form-${surveyItem.id}`}>
        <FormLabel component="legend">Awnser</FormLabel>
        <RadioGroup
          onChange={handleAwnser}
          aria-label="Awnser"
          defaultValue={surveyAwnser[surveyItem.id]}
          name={`question-${surveyItem.id}`}
        >
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            key={surveyItem.id}
            initial={{ translateY: '-100%', scale: 0 }}
            animate={{ translateY: 0, scale: 1 }}
            transition={{
              type: '',
              stiffness: 260,
              damping: 20,
            }}
          >
            { surveyItem.option.map((item) => (
              <FormControlLabel value={item} control={<Radio color="secondary" />} label={item} key={item} />
            ))}
          </motion.div>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default SingleSurvey;
