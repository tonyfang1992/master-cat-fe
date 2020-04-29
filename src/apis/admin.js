import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");
export default {
  getCreateProduct() {
    return apiHelper.get("/admin/CreateProduct", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getStore() {
    return apiHelper.get("/admin/store", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  createProduct({ formData }) {
    return apiHelper.post("/admin/NewProduct", formData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  createActivity({ formData }) {
    return apiHelper.post("/admin/NewActivity", formData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
