import React, { useState, useEffect } from 'react';

const CLICK_COUNT = 'CLICK_COUNT';

function NotFound() {
    return <div>
        <h1>Not Found</h1>
        <p>The page you're looking for does not exist</p>
        <Counter />
    </div>
}


function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const savedCount = localStorage.getItem(CLICK_COUNT);
        if (savedCount) {
            setCount(parseInt(savedCount, 10));
        }
    }, []);

    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem(CLICK_COUNT, newCount);
    };

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>
          Click me
        </button>
      </div>
    );
}



export default  NotFound ;