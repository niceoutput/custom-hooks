import React from 'react';
import { useCookies } from '../hooks'

const Cookie = () => {
    const [cookie, setCookie] = useCookies({ key: "test" });

    if (!cookie) return null;
    return (
        <div>
            <h1>{cookie || ""}</h1>
            <input type="text"
                value={cookie}
                onChange={e => setCookie(e.target.value)}
            />
        </div>
    )
}

export default Cookie;
