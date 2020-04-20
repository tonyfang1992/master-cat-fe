import { apiHelper } from "./../utils/helpers";

export default {
  category: {
    get(id) {
      return apiHelper.get(`/category/${id}`);
    },
  },
};
