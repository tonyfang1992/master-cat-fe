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
  getStoreByCategory(categoryId) {
    return apiHelper.get(`/admin/store/${categoryId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getActivity() {
    return apiHelper.get("/admin/activity", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getEditThisWeekActivity(id) {
    return apiHelper.get(`/admin/EditThisWeekActivity/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getEditNewActivity(id) {
    return apiHelper.get(`/admin/EditNewActivity/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getOrder() {
    return apiHelper.get("/admin/orders", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUser() {
    return apiHelper.get("/admin/users", {
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
  editThisWeekActivity({ formData, targetThisWeekActivityId }) {
    return apiHelper.put(
      `/admin/EditThisWeekActivity/${targetThisWeekActivityId}`,
      formData,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
  editNewActivity({ formData, targetNewActivityId }) {
    return apiHelper.put(
      `/admin/EditNewActivity/${targetNewActivityId}`,
      formData,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
  // changeLaunched(id) {
  //   return apiHelper.put(`/admin/productLaunched/${id}`, {
  //     headers: { Authorization: `Bearer ${getToken()}` },
  //   });
  // },

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
  deleteOrder(id) {
    return apiHelper.delete(`/admin/orders/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  deleteUser(id) {
    return apiHelper.delete(`/admin/users/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
