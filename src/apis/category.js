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
  FeedAge: {
    get(id) {
      return apiHelper.get(`/feedage/${id}`);
    },
  },
  FeedFunction: {
    get(id) {
      return apiHelper.get(`/feedfunction/${id}`);
    },
  },
  Can: {
    get(id) {
      return apiHelper.get(`/can/${id}`);
    },
  },
};
