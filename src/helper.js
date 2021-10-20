import { appActions } from "~redux/appSlice";
import { updateCart, getCart } from "~services/cartService";
import { signOut as _signOut } from "~services/authService";
import { getMyProfile } from "~services/profileService";

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
    if (callback) callback(appActions.setCart({ loading: true }));
    getCart().then((data) => {
        if (data && callback) {
            callback(appActions.setCart(data.items));
        };
    });
}

export const loadProfile = function (callback) {
    if (callback) callback(appActions.setProfile({ loading: true }));
    getMyProfile().then((data) => {
        if (data && callback) {
            callback(appActions.setProfile(data));
        };
    });
}

export const signOut = function (router) {
    _signOut().then(function () {
        localStorage.removeItem('seller_id');

        if (router)
            router.push("/");
    });
}

export const postLoginAction = function (callback) {
    reloadCart(callback);
    loadProfile(callback);
}

export const paths = {
    PageList: "/pagelist",
    PageDetail: "/pageDetails",
    UserProfile: "/profile",
    MyProfile: "/myprofile",
    Upload: "/dashboard/upload",
    EditProfile: "/dashboard",
    ManageItems: "/dashboard/managed",
    Statement: "/dashboard/statements",
    Login: "/login",
    Register: "/register",
}