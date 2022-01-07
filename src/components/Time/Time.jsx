import React, { useState, useEffect } from 'react';
import './Time.css';
import { FcAlarmClock } from 'react-icons/fc';

const Time = ({ setSurveyFinish }) => {
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  useEffect(() => {
    const secondTmp = localStorage.getItem('second');
    const minuteTmp = localStorage.getItem('minute');
    // eslint-disable-next-line eqeqeq
    if (secondTmp == 'undefined' || secondTmp == undefined || minuteTmp == undefined || minuteTmp == 'undefined') {
      setMinute(2);
      setSecond(0);
    } else {
      setSecond(secondTmp);
      setMinute(minuteTmp);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (second > 0 && second > 0) {
        setSecond(second - 1);
      }

      if (second === 0 && minute > 0) {
        setMinute(minute - 1);
        setSecond(59);
      }
      if (minute === 0 && second === 0) {
        localStorage.setItem('finish', true);
        setSurveyFinish(true);
      }
    }, 1000);
  }, [second]);

  useEffect(() => {
    if (localStorage.getItem('finish')) {
      localStorage.removeItem('second');
      localStorage.removeItem('minute');
    } else {
      localStorage.setItem('second', second);
      localStorage.setItem('minute', minute);
    }
  }, [second, minute]);

  return (
    <div className="Time">
      <FcAlarmClock />
      <div className="time-body">{minute < 10 ? `0${minute}` : minute}</div>
      <span>:</span>
      <div className="time-body">{second < 10 ? `0${second}` : second}</div>
    </div>
  );
};

export default Time;
