import { apiHelper } from "../utils/helpers";

export default {
  carts: {
    getCart(id) {
      return apiHelper.get(`/cart/${id}`);
    },
    postCart(data) {
      return apiHelper.post("/cart", { ...data });
    },
  },
};
