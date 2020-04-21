import { apiHelper } from "./../utils/helpers";

export default {
  product: {
    get(id) {
      return apiHelper.get(`/products/${id}`);
    },
    getTopProducts() {
      return apiHelper.get("/products/top");
    },
    getNewProducts() {
      return apiHelper.get("/products/new");
    },
  },
};
