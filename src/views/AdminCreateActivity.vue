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
          <label for="name">活動名稱</label>
          <input
            id="name"
            v-model="Activity.name"
            type="text"
            class="form-control"
            name="name"
            placeholder="活動名稱"
            required
          />
        </div>

        <div class="form-group">
          <label for="Activity">活動分類</label>
          <select
            id="Activity"
            v-model="Activity.Activity"
            class="form-control"
            name="Activity"
            required
          >
            <option value selected disabled>--請選擇--</option>
            <option
              v-for="Activity in Activities"
              :key="Activity.id"
              :value="Activity.id"
            >{{ Activity.name }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="description">活動描述</label>
          <textarea
            id="description"
            v-model="Activity.description"
            type="text"
            class="form-control"
            name="description"
            placeholder="活動描述"
            required
          />
        </div>

        <div class="form-group">
          <label for="discount">打折數</label>
          <input
            id="discount"
            v-model="Activity.discount"
            type="text"
            class="form-control"
            name="discount"
          />
        </div>

        <div class="form-group">
          <label for="image">Image</label>
          <img
            v-if="Activity.image"
            :src="Activity.image"
            class="d-block img-thumbnail mb-3"
            width="150"
            height="150"
          />
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            class="form-control-file"
            @change="handleFileChange"
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
  { id: 1, name: "本周活動" },
  { id: 2, name: "新品推薦" }
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
      Activities: [],
      Activity: {
        Activity: "",
        name: "",
        description: "",
        image: "",
        discount: null
      },
      isLoading: true
    };
  },
  created() {
    this.fetchCreateActivity();
  },
  methods: {
    fetchCreateActivity() {
      this.Activities = dummyData;
      this.isLoading = false;
    },
    handleFileChange(data) {
      const files = data.target.files;
      if (!files.length) return; // 如果沒有檔案則離開此函式
      // 否則產生預覽圖...
      const imageURL = window.URL.createObjectURL(files[0]);
      this.product.image = imageURL;
    },
    async handleSubmit(data) {
      try {
        if (
          this.Activity.discount > 99 ||
          this.Activity.discount < 1 ||
          !/^\d+$/.test(this.Activity.discount)
        ) {
          Toast.fire({
            icon: "warning",
            title: "打折數請輸入1~99的正整數"
          });
          return;
        }
        const form = data.target;
        const formData = new FormData(form);
        const { statusText } = await adminAPI.createActivity({ formData });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
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
