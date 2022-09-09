import React, {useEffect, useState} from 'react'

const useCountDown = (num) => {
    const [seconds, setSecond] = useState(num)

    useEffect(() => {
        let timer = setTimeout(() => {
            if (seconds > 0) {
                setSecond(c => c - 1);
            }
        }, 1000);
        return () => {
            clearTimeout(timer)
        }
    }, [seconds]);

    return [seconds, setSecond]
}

// use it
const TimeCount = () => {
    const [seconds, setSecond] = useCountDown(0)
    return (
        <button
            disable={seconds !== 0}
            onClick={() => setSecond(59)}
        >
            {seconds > 0 ? `${seconds}s后可点击` : '点击开始倒计时'}
        </button>
    )
}

export default TimeCount