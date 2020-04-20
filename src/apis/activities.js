import { apiHelper } from "./../utils/helpers";

export default {
  activities: {
    getMenu() {
      return apiHelper.get("/activity");
    },
  },
};
