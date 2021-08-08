import React from 'react'
import './Time.css';
import { useState } from 'react-dom';

function Time() {

    const [today, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 1 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);

    let time = today.toLocaleTimeString();
    time = time.substring(0, time.indexOf(" ")-3) /*+ time.substring(time.indexOf(" "), time.length)*/;
    let ampm = today.toLocaleString();
    ampm = ampm.substring(ampm.length-2, ampm.length);

    return (
        <div className='time-container'>
            <h1 className='time'>{time}</h1>
            <p className='am-pm'>{ampm}</p>
        </div>
    )
}

export default Time
