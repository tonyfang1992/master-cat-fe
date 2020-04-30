import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  get(id) {
    return apiHelper.get(`/profile/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  put(data) {
    return apiHelper.post(
      `/profile/`,
      { ...data },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
  signUp(data) {
    return apiHelper.post("/signup", { ...data });
  },
};
