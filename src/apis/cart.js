import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");
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
      return apiHelper.get(`/orders/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
    },
    postOrder(data) {
      return apiHelper.post(
        "/order",
        { ...data },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
    },
    cancelOrder(id) {
      return apiHelper.delete(`/order/${id}/cancel`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
    },
  },
  payments: {
    getPayment(id) {
      return apiHelper.get(`/order/${id}/payment`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
    },
  },
};
