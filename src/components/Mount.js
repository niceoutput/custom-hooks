import React from 'react';
import { useMount, useUnmount, useToggle } from "../hooks";



const Mount = () => {
    const { isToggled, toggle } = useToggle();

    return (
      <div>
        <button onClick={toggle}>Toggle</button>
        {isToggled && <UnMount />}
      </div>
    );
}

export const UnMount = () => {
    useMount(() => {
        console.log('hey, i am mounting');
    });

    useUnmount(() => {
        console.log('hey, i am unmounting');
    });

    return (
        <div>
            <h1>I'm mounting and unmounting</h1>
        </div>
    )
}

export default Mount;

