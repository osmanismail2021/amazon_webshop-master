export const initialState = {
    basket: [{
        id: "12321341",
        title: "Aileen Violine 4/4 Anfänger Set, Geige Kinder Erwachsene mit Gebrauchsanweisung",
        price: 62.99,
        rating: 4,
        image:"https://m.media-amazon.com/images/I/71FlGh5YwQS._AC_SL1500_.jpg"
    },
    {
        id: "12321341",
        title: "Aileen Violine 4/4 Anfänger Set, Geige Kinder Erwachsene mit Gebrauchsanweisung",
        price: 62.99,
        rating: 4,
        image:"https://m.media-amazon.com/images/I/71FlGh5YwQS._AC_SL1500_.jpg"
    }],
    user: null,
    
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
        return { 
            ...state,
            basket: [...state.basket, action.item] 
        };
        
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from basket
            // We cloned the basket
            let newBasket = [...state.basket]
            //We checked to see if product exists,
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
                );

            if (index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id : ${action.id}) as its `
                )
            }
        return { 
            ...state, 
            basket: newBasket, 
        };
        default:
            return state;

    }
};

export default reducer;

/*
*/