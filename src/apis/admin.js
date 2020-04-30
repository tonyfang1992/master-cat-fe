import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");
export default {
  getCreateProduct() {
    return apiHelper.get("/admin/CreateProduct", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getEditProduct(id) {
    return apiHelper.get(`/admin/EditProduct/${id}`, {
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
  editProduct({ formData, targetProductId }) {
    return apiHelper.put(`/admin/EditProduct/${targetProductId}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  createActivity({ formData }) {
    return apiHelper.post("/admin/NewActivity", formData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  createFeedorCan({ formData }) {
    return apiHelper.post("/admin/FeedorCan", formData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
