import { apiHelper } from "./../utils/helpers";

export default {
  getCreateProduct() {
    return apiHelper.get("/admin/Createproduct");
  },
  create({ formData }) {
    return apiHelper.post("/admin/product", formData);
  },
};
