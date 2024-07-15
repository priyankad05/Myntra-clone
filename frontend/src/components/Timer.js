
import React, { useEffect, useState } from 'react';

function Timer() {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(12); // Initialize with 12 hours

    useEffect(() => {
        const now = new Date().getTime();
        const countDownDate = now + 12 * 60 * 60 * 1000; // 12 hours from now

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setHour(hours);
                setMin(minutes);
                setSec(seconds);
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div style={{ backgroundColor: '#F0FFFF', padding: '5px' }} className='text-center'>
            <p style={{ fontSize: '30px', color: 'black' }}>
                Sale Ends In <b>{`${hour} h: ${min} m: ${sec} s`}</b>
            </p>
        </div>
    );
}

export default Timer;
