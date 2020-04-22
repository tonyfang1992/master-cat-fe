import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "../apis/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      role: "",
    },
    isAuthenticated: false,
    token: "",
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      };
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem("token");
      state.isAuthenticated = true;
    },
    revokeAuthentication(state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      // 登出時一並將 state 內的 token 移除
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        const { data, statusText } = await usersAPI.getCurrentUser();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        commit("setCurrentUser", {
          id: data.id,
          name: data.name,
          email: data.email,
          image: data.image,
          role: data.role,
        });
        return true;
      } catch (error) {
        console.error("can not fetch user information");
        commit("revokeAuthentication");
        return false;
      }
    },
  },
  modules: {},
});
