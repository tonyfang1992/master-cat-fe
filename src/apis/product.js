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
    getHotProducts() {
      return apiHelper.get("/products/hot");
    },
    getSearch(data) {
      return apiHelper.post("/search", { ...data });
    },
  },
};
