import { apiHelper } from "../utils/helpers";

export default {
  // 帶入需要的參數
  signIn({ email, password }) {
    return apiHelper.post("/signin", {
      email,
      password,
    });
  },
};
