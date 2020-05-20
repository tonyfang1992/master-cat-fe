<template>
  <div class="inner row">
    <div class="col-1"></div>
    <div class="col-10 mt-5">
      <h1>修改本周活動</h1>
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
            v-model="ThisWeekActivity.name"
            type="text"
            class="form-control"
            name="name"
            placeholder="商品名稱"
            required
          />
        </div>

        <div class="form-group">
          <label for="description">活動描述</label>
          <textarea
            id="description"
            v-model="ThisWeekActivity.description"
            type="text"
            class="form-control"
            name="description"
            placeholder="商品描述"
            required
          />
        </div>

        <div class="form-group">
          <label for="image">Image</label>
          <img
            v-if="ThisWeekActivity.image"
            :src="ThisWeekActivity.image"
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
import AdminMenu from "../components/AdminMenu";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
export default {
  components: {
    AdminMenu
  },
  data() {
    return {
      ThisWeekActivityId: "",
      ThisWeekActivity: {
        name: "",
        description: "",
        image: ""
      },
      isLoading: true
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchEditThisWeekActivity(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchEditThisWeekActivity(id);
    next();
  },
  methods: {
    async fetchEditThisWeekActivity(id) {
      try {
        console.log(id);
        this.ThisWeekActivityId = id;
        const { data, statusText } = await adminAPI.getEditThisWeekActivity(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.ThisWeekActivity = data.ThisWeekActivity;
        this.isLoading = false;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得商品資料，請稍後再試"
        });
      }
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
        const targetThisWeekActivityId = this.ThisWeekActivityId;
        const form = data.target;
        const formData = new FormData(form);
        const { statusText } = await adminAPI.editThisWeekActivity({
          formData,
          targetThisWeekActivityId
        });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        Toast.fire({
          icon: "success",
          title: "成功修改活動資訊"
        });
        this.$router.push({ name: "AdminGetActivity" });
      } catch {
        Toast.fire({
          icon: "error",
          title: "現在無法修改活動，請稍後再試"
        });
      }
    }
  }
};
</script>
