import { apiHelper } from "../utils/helpers";

export default {
  carts: {
    getCart(id) {
      return apiHelper.get(`/cart/${id}`);
    },
    postCart(data) {
      return apiHelper.post("/cart", { ...data });
    },
    addCartItem: (id) => {
      return apiHelper.post(`/cartItem/${id}/add`);
    },
    subCartItem: (id) => {
      return apiHelper.post(`/cartItem/${id}/sub`);
    },
    deleteCartItem: (id) => {
      return apiHelper.delete(`/cartItem/${id}`);
    },
  },
  orders: {
    postOrder: (data) => {
      return apiHelper.post("/order", { ...data });
    },
  },
};
