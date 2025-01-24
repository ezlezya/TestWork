'use client'
import { createContext, useState } from 'react';

// Створюємо контекст
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [value, setValue] = useState("All");

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};