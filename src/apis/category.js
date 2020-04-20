import { apiHelper } from "./../utils/helpers";

export default {
  category: {
    get(id) {
      return apiHelper.get(`/category/${id}`);
    },
  },
  subcategory: {
    get(id) {
      return apiHelper.get(`/subcategory/${id}`);
    },
  },
};
