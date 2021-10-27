import { appActions } from "~redux/appSlice";
import { updateCart, getCart } from "~services/cartService";
import { signOut as _signOut } from "~services/authService";
import { getMyProfile } from "~services/profileService";
import { getDownloadUrl } from "~services/purchaseService";

export const removeFromCart = function (currentData, itemIndex, dispatcher, cb) {
    dispatcher(appActions.setCart({ loading: true }));
    const updatedCartData = currentData.filter((_, index) => index !== itemIndex);
    updateCart(updatedCartData).then(() => {
        reloadCart(dispatcher)
        if (cb) cb()
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

export const downloadItem = function ({item_id, order_number, item_name}, callback) {
    getDownloadUrl({ item_id, order_id: order_number }).then(res => {
      var link = document.createElement("a");
      link.download = item_name;
      link.href = res.url;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (callback) callback();
    })
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
    PurchasedItems: "/dashboard/purchase",
    Credits: "/dashboard/credits",
    Settings: "/dashboard/settings",
    Withdrawls: "/dashboard/withdrawals",
    Cart: "/cart",
    Checkout: "/checkout",
}