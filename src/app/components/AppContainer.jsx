'use client'
import React, { useContext, useState } from 'react'
import { MyContext } from '../context';

export default function AppContainer({ data }) {
    const { value, setValue } = useContext(MyContext)

    const [isCategoryOpen, setCategoryOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const toggleCategoryMenu = () => setCategoryOpen(!isCategoryOpen);

    const handleCategorySelect = (category) => {
        setValue(category)
        setSelectedCategory(category);
        setCategoryOpen(false);
    };

    return (
        <header className="bg-gray-800 px-10 py-5 text-white flex items-center justify-between">
            <div className="text-2xl font-semibold">
                Назва сайту
            </div>

            <div className="flex items-center space-x-6">
                {/* Категорії */}
                <div className="relative">
                    <button
                        onClick={toggleCategoryMenu}
                        className="bg-gray-700 hover:bg-gray-600 p-2 rounded-md w-56">
                        {selectedCategory || 'Вибір категорії'}
                    </button>
                    {isCategoryOpen && (
                        <ul className="absolute z-50 left-0 mt-2 bg-white text-black p-2 rounded-md shadow-md">
                            <li><button onClick={() => handleCategorySelect("All")} className="block px-4 py-2 w-full hover:bg-gray-300">All</button></li>
                            {data.map((item, index) => (
                                <li key={index}><button onClick={() => handleCategorySelect(item)} className="block px-4 py-2 w-full hover:bg-gray-300">{item}</button></li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </header>
    )
}
