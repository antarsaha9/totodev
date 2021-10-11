import { appActions } from "~redux/appSlice";
import { updateCart, getCart } from "~services/cartService";

export const removeFromCart = function (currentData, itemIndex, dispatcher) {
    dispatcher(appActions.setCart({ loading: true }));
    const updatedCartData = currentData.filter((_, index) => index !== itemIndex);
    updateCart(updatedCartData).then(() => {
        reloadCart(dispatcher)
    })
}

export const addToCart = function (currentData, itemId, dispatcher) {
    dispatcher(appActions.setCart({ loading: true }));
    const updatedCartData = currentData.concat({ item_id: itemId, quantity: 1 });
    updateCart(updatedCartData).then(data => {
        reloadCart(dispatcher)
    })
}

export const reloadCart = function (callback) {
    getCart().then((data) => {
        if (data) {
            callback(appActions.setCart(data.items));
        };
    });
}