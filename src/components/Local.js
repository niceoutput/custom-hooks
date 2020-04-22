import React from 'react';
import { useLocalStorage } from '../hooks'

const Local = () => {
    const [value, setValue] = useLocalStorage("test", "I am initial");

    if (!value) return null;
    return (
        <div>
            <h1>{value || ""}</h1>
            <input type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    )
}

export default Local;
