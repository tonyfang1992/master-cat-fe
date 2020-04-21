import { apiHelper } from "./../utils/helpers";

export default {
  product: {
    get(id) {
      return apiHelper.get(`/products/${id}`);
    },
  },
};
