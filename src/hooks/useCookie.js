import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

export const useCookies = ({ key }) => {
    const initial = Cookies.get(key);
    const [cookie, setStateCookie] = useState(initial);

    useEffect(() => {
        Cookies.set(key, cookie);
    }, [cookie, key]);

    return [cookie, setStateCookie];
}
