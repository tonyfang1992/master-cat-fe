import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getCat(id) {
    return apiHelper.get(`/cat/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  postCat(data) {
    return apiHelper.post(
      "/cat",
      { ...data },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
  putCat(data) {
    return apiHelper.put(
      "cat",
      { ...data },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
};
