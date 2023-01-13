import * as React from 'react';

export const useLocalStorage = (keyName: string, initialValue: any) => {
    const [storedValue, setStoredValue] = React.useState(() => {
        try {   
            const value = window.localStorage.getItem(keyName);
            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(initialValue));
                return initialValue;
            }
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: any) => {
        try {
            localStorage.setItem(keyName, JSON.stringify(value));
        } catch (error) {
            setStoredValue(value);
        }
    }
    return [storedValue, setValue];
}