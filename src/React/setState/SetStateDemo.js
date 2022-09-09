import React, { useState } from "react";

export default function StateDemo() {
    const [num, setNum] = useState(1);

    const onBtnClick = (e) => {
        setNum(2);
        foo();
    };

    const foo = () => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        }).then(() => {
            print();
        });
    };

    const print = () => {
        // ？
        console.log(num);
    };

    return <button onClick={onBtnClick}>click me</button>;
}