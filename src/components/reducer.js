export const initialState = {
    cart: [],
    user: null
};


export const getCartTotal = (cart) => 
    cart.reduce((acc, item) => acc + item.price, 0);

//Handle state changes for cart and user
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_CART":
            return { 
                ...state,
                cart: [...state.cart, action.item],
            };
        case "REMOVE_FROM_CART":
            const removeItem =  state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
                )
            let newCart= [...state.cart];
            if (removeItem >= 0) {
                newCart.splice(removeItem, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id})`
                )
            }
            return { 
                ...state,
                cart: newCart}

        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
            
        default:
            return state
    }
}

export default reducer;