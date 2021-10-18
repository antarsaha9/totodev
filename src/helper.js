import { appActions } from "~redux/appSlice";
import { updateCart, getCart } from "~services/cartService";

export const removeFromCart = function (currentData, itemIndex, dispatcher) {
    dispatcher(appActions.setCart({ loading: true }));
    const updatedCartData = currentData.filter((_, index) => index !== itemIndex);
    updateCart(updatedCartData).then(() => {
        reloadCart(dispatcher)
    })
}

export const addToCart = function (currentData, itemId, dispatcher, callback) {
    dispatcher(appActions.setCart({ loading: true }));
    const updatedCartData = currentData.concat({ item_id: itemId, quantity: 1 });
    updateCart(updatedCartData).then(data => {
        reloadCart(dispatcher)
        if (callback) callback()
    })
}

export const reloadCart = function (callback) {
    getCart().then((data) => {
        if (data) {
            callback(appActions.setCart(data.items));
        };
    });
}

export const paths = {
    PageList:"/pagelist",
    PageDetail:"/pageDetails",
    UserProfile:"/profile",
    MyProfile:"/myprofile",
    Upload:"/dashboard/upload",
    // PageList:"/pagelist",
    // PageList:"/pagelist",
}