
export const ADD = (item) => ({
    type: 'ADD_TO_CART',
    payload:  item
});

export const TOTAL_CART = () => ({
    type: 'TOTAL_CART',
    payload: ''
});

export const REMOVE_ITEM = (product) => ({
    type: 'REMOVE_ITEM',
    payload: {
        product_id: product.product_id,
        color: product.color,
        size: product.size,
    }
});

export const CLEAR = () => ({
    type: 'CLEAR_CART',
    payload: ''
});

export const UPDATE_QUANTITY = (product_id, color, size, quantity) => ({
    type: "UPDATE_QUANTITY",
    payload: { product_id, color, size, quantity },
});