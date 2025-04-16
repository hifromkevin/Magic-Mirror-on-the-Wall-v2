import { useEffect, useState } from 'react';

import { time, fullDate, weekday } from '../../utils/DateAndTimeUtils';

import styles from './styles/DateAndTime.module.scss';

const DateAndTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dateAndTimeContainer}>
      <p className={styles.time}>{time(currentDate)}</p>
      <p>{fullDate(currentDate)}</p>
      <p>{weekday(currentDate)}</p>
    </div>
  );
};

export default DateAndTime;
