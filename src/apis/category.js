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
  ThisWeekActivity: {
    get(id) {
      return apiHelper.get(`/thisweekactivity/${id}`);
    },
  },
  NewActivity: {
    get(id) {
      return apiHelper.get(`/newactivity/${id}`);
    },
  },
  Feed: {
    get(id) {
      return apiHelper.get(`/feed/${id}`);
    },
  },
};
