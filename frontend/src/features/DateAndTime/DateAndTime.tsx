import { useEffect, useState } from 'react';

import { time, fullDate, weekday } from '../../utils/DateAndTimeUtils';

const DateAndTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dateAndTimeCotainer">
      <p className="dateAndTime__time">{time(currentDate)}</p>
      <p className="dateAndTime__date">{fullDate(currentDate)}</p>
      <p className="dateAndTime__day">{weekday(currentDate)}</p>
    </div>
  );
};

export default DateAndTime;
