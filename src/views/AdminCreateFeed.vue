<template>
  <div class="inner row">
    <div class="col-1"></div>
    <div class="col-10 mt-5">
      <h1>新增活動</h1>
      <hr />
    </div>
    <div class="col-1"></div>
    <div class="col-1 mt-5"></div>
    <div class="col-3 mt-5">
      <AdminMenu />
    </div>
    <div class="col-7 row mt-5">
      <form v-show="!isLoading" @submit.stop.prevent="handleSubmit" style="width:100%;">
        <div class="form-group">
          <label for="name">罐頭or飼料名稱</label>
          <input
            id="name"
            v-model="FeedorCan.name"
            type="text"
            class="form-control"
            name="name"
            placeholder="罐頭or飼料名稱"
            required
          />
        </div>

        <div class="form-group">
          <label for="FeedorCan">罐頭or飼料分類</label>
          <select
            id="FeedorCan"
            v-model="FeedorCan.id"
            class="form-control"
            name="FeedorCan"
            required
          >
            <option value selected disabled>--請選擇--</option>
            <option
              v-for="FeedorCan in FeedorCans"
              :key="FeedorCan.id"
              :value="FeedorCan.id"
            >{{ FeedorCan.name }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="description">商品描述</label>
          <textarea
            id="description"
            v-model="FeedorCan.description"
            type="text"
            class="form-control"
            name="description"
            placeholder="罐頭or飼料描述"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">送出</button>
      </form>
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
const dummyData = [
  { id: 1, name: "喵喵飼料 (品牌)" },
  { id: 2, name: "喵喵飼料 (年齡品種)" },
  { id: 3, name: "喵喵飼料 (依功能性)" },
  { id: 4, name: "喵喵罐頭 (品牌)" },
  { id: 5, name: "喵喵主 / 副食罐" }
];
import AdminMenu from "../components/AdminMenu";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
export default {
  components: {
    AdminMenu
  },
  data() {
    return {
      FeedorCans: [],
      FeedorCan: {
        id: "",
        name: "",
        description: ""
      },
      isLoading: true
    };
  },
  created() {
    this.fetchCreateFeedorCan();
  },
  methods: {
    fetchCreateFeedorCan() {
      this.FeedorCans = dummyData;
      this.isLoading = false;
    },
    async handleSubmit(data) {
      try {
        const form = data.target;
        const formData = new FormData(form);
        const { statusText } = await adminAPI.createFeedorCan({ formData });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        Toast.fire({
          icon: "success",
          title: "新增成功，現在重新導向回首頁查看"
        });
        this.$router.push({ name: "cats" });
      } catch {
        Toast.fire({
          icon: "error",
          title: "現在無法新增商品，請稍後再試"
        });
      }
    }
  }
};
</script>
