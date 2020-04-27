import { apiHelper } from "./../utils/helpers";

export default {
  getCreateProduct() {
    return apiHelper.get("/admin/CreateProduct");
  },
  getStore() {
    return apiHelper.get("/admin/store");
  },
  createProduct({ formData }) {
    return apiHelper.post("/admin/NewProduct", formData);
  },
  createActivity({ formData }) {
    return apiHelper.post("/admin/NewActivity", formData);
  },
};
