import { Frown, Trash, X } from "lucide-react";

const CartModal = ({ cart, setCart, onClose, isModalOpen }) => {

    const handleSetCart = (deny) => {
        setCart(cart.filter((_, index) => index !== deny))
    }

    return (
        <div className={`${isModalOpen ? "" : "hidden"} fixed top-16 left-[50%] translate-x-[-50%] w-[30vw] h-[80vh] text-zinc-50 bg-gray-800 border-2 border-gray-500 flex justify-center rounded`}>
            <div className="">
                <h2 className="text-center text-2xl my-8">Ваша корзина:</h2>
                {cart.length === 0 ? (
                    <div className="flex gap-2 justify-center items-center">
                        <p className="text-2xl">Корзина порожня</p>
                        <span><Frown size={32} color="orange" /></span>
                    </div>
                ) : (
                    <ul className="flex flex-col gap-3 px-5 w-full">
                        {cart.map((product, index) => (
                            <li key={index} className="flex border-2 rounded-sm">
                                <div className="relative flex-1 bg-gray-700 p-4 min-w-[450px]">
                                    {product.title} - Ціна: <span className="text-green-500">{product.price}$</span>
                                    <p className="bg-gray-100 p-[1px] text-gray-700 absolute top-[-2px] left-[0] rounded-br">{"x" + product.quantity}</p>
                                </div>
                                <p className="flex justify-center items-center cursor-pointer py-5 border-l-2 w-[40px]" onClick={() => handleSetCart(index)}><Trash color="red" /></p>
                            </li>
                        ))}
                    </ul>
                )}
                <button className="absolute top-[5px] right-1 text-lg hover:text-red-600 transition-colors duration-300" onClick={onClose}><X /></button>
            </div>
        </div>
    );
};

export default CartModal;