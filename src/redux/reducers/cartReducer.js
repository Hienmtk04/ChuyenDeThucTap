import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];

const initCart = {
    carts: storedCart,
    amountItem: storedCart.length,
    totalAmount: storedCart.reduce((total, item) => total + item.price * item.quantity, 0),
    color: {},
    size: ''
};
const cartReducer = (state = initCart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItemIndex = state.carts.findIndex(item =>
                item.product_id === action.payload.product_id &&
                item.color === action.payload.color &&
                item.size === action.payload.size
            );

            let updatedCarts;
            if (existingItemIndex !== -1) {
                // Update existing item
                updatedCarts = state.carts.map((item, index) =>
                    index === existingItemIndex ? {
                        ...item, quantity: item.quantity + action.payload.amount
                    } : item
                );
                // toast.info(`Tăng số lượng ${action.payload.product_name}`, {
                //     position: "top-right", 
                //     autoClose: 2000
                // });
            } else {
                // Add new item
                // toast.success(`Thêm ${action.payload.product_name} vào giỏ hàng`, {
                //     position: "top-right",
                //     autoClose: 2000,
                // });
                const newItem = {
                    ...action.payload,
                    quantity: action.payload.amount,
                };
                updatedCarts = [...state.carts, newItem];
                localStorage.setItem('cartItems', JSON.stringify(updatedCarts));
            }

            // Calculate total amount
            const totalAmount = updatedCarts.reduce((total, item) => total + item.price * item.quantity, 0);
            return {
                ...state,
                carts: updatedCarts,
                amountItem: updatedCarts.length, // Update the number of items in cart
                totalAmount // Set the total amount
            };

        case 'TOTAL_CART':
            console.log("Cart items:", state.carts);
            let total = 0;
            state.carts.map((item) => {
                total += item.price * item.quantity;
            });
            return {
                ...state,
                totalAmount: total,
            }

        case 'REMOVE_ITEM':
            // toast.warning(`Xóa ${action.payload.product_name} khỏi giỏ hàng`, {
            //     position: "top-right",
            //     autoClose: 2000
            // });
            const filteredCart = state.carts.filter(item =>
                !(item.product_id === action.payload.product_id &&
                    item.color === action.payload.color &&
                    item.size === action.payload.size)
            );
            localStorage.setItem('cartItems', JSON.stringify(filteredCart));

            return {
                ...state,
                carts: filteredCart
            };
        case 'CLEAR_CART':
            return {
                ...state,
                carts: [], 
                totalAmount : 0
            }
        case 'UPDATE_QUANTITY':
            const updatedCart = state.carts.map(item =>
                item.product_id === action.payload.product_id &&
                    item.color === action.payload.color &&
                    item.size === action.payload.size
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
            return {
                ...state,
                carts: updatedCart,
            };
        default:
            return state;
    }
}
export default cartReducer;