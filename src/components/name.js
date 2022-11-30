import React, { useState, useEffect } from 'react';

function Nameset() {
    // const [X, setX] = useState(0);
    // const [Y, setY] = useState(0);
    const [count, setCount] = useState(0)

    const tick = () =>{
        setCount(count=0)
    }
    // const logMouse =e =>{
    //     // console.log('Mouse Event')
    //     // setX(e.clientX)
    //     // setY(e.clientY)
    //     const Interval = setInterval(tick,1000)
    //     return () =>{
    //         clearInterval(Interval)
    //     }
    // }

    useEffect(() => {
        const Interval = setInterval(tick,1000)
        return () =>{
            clearInterval(Interval)
        }
    },[count])

    return ( 
         <h1>
            {count}
            {/* X-{X} Y-{Y} */}
         </h1>
     );
     
}

export default  Nameset;