import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  get({ id }) {
    return apiHelper.get(`/users/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  signUp(data) {
    return apiHelper.post("/signup", { ...data });
  },
};
