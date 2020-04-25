import { apiHelper } from "../utils/helpers";

export default {
  carts: {
    getCart(id) {
      return apiHelper.get(`/cart/${id}`);
    },
    postCart(data) {
      return apiHelper.post("/cart", { ...data });
    },
    addCartItem(id) {
      return apiHelper.post(`/cartItem/${id}/add`);
    },
    subCartItem(id) {
      return apiHelper.post(`/cartItem/${id}/sub`);
    },
    deleteCartItem(id) {
      return apiHelper.delete(`/cartItem/${id}`);
    },
  },
  orders: {
    getOrders(id) {
      return apiHelper.get(`/orders/${id}`);
    },
    postOrder(data) {
      return apiHelper.post("/order", { ...data });
    },
    cancelOrder(id) {
      return apiHelper.post(`/order/${id}/cancel`);
    },
  },
  payments: {
    getPayment(id) {
      return apiHelper.get(`/order/${id}/payment`);
    },
  },
};
