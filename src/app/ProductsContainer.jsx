'use client'

import React, { useContext, useState } from 'react'
import CartModal from './components/CartModal';
import { MyContext } from './context';
import BuyBtn from './components/ui/BuyBtn';

export default function ProductsContainer({ data }) {
    const { value, setValue } = useContext(MyContext)

    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredItems = value === "All"
        ? data
        : data.filter((item) => item.category === value);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        openModal()
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredItems.map((product) => (
                        <div
                            key={product.id}
                            className="relative bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-60 object-cover rounded-md mb-4"
                            />
                            <h2 className="pb-4 text-lg font-semibold mb-5">{product.title}</h2>
                            <div className='absolute bottom-2 px-5 w-full flex justify-between items-center'>
                                <p className="text-gray-700 font-medium">${product.price}</p>
                                <BuyBtn product={product} addToCart={addToCart} />
                            </div>
                        </div>
                    ))}
                </div>
            </div >

            <div>
                <CartModal cart={cart} setCart={setCart} onClose={closeModal} isModalOpen={isModalOpen} />
            </div>
        </>
    )
}
