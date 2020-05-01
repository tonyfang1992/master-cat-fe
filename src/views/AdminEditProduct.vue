<template>
  <div class="inner row">
    <div class="col-1"></div>
    <div class="col-10 mt-5">
      <h1>新增商品</h1>
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
          <label for="name">商品名稱</label>
          <input
            id="name"
            v-model="product.name"
            type="text"
            class="form-control"
            name="name"
            placeholder="商品名稱"
            required
          />
        </div>

        <div class="form-group">
          <label for="Category">大分類</label>
          <select
            id="Category"
            v-model="product.CategoryId"
            class="form-control"
            name="Category"
            required
          >
            <option value selected disabled>--請選擇--</option>
            <option
              v-for="Category in Categories"
              :key="Category.id"
              :value="Category.id"
            >{{ Category.name }}</option>
          </select>
        </div>

        <div v-if="product.CategoryId == 2" class="form-group">
          <label for="Can">罐頭品牌</label>
          <select id="Can" v-model="product.CanId" class="form-control" name="Can" required>
            <option value selected disabled>--請選擇--</option>
            <option v-for="Can in Cans" :key="Can.id" :value="Can.id">{{ Can.brand }}</option>
          </select>
        </div>
        <div v-if="product.CategoryId == 2" class="form-group">
          <label for="CanType">罐頭分類</label>
          <select
            id="CanType"
            v-model="product.CanTypeId"
            class="form-control"
            name="CanType"
            required
          >
            <option value selected disabled>--請選擇--</option>
            <option
              v-for="CanType in CanTypes"
              :key="CanType.id"
              :value="CanType.id"
            >{{ CanType.type }}</option>
          </select>
        </div>

        <div v-if="product.CategoryId == 1" class="form-group">
          <label for="Feed">飼料品牌</label>
          <select id="Feed" v-model="product.FeedId" class="form-control" name="Feed" required>
            <option value selected disabled>--請選擇--</option>
            <option v-for="Feed in Feeds" :key="Feed.id" :value="Feed.id">{{ Feed.brand }}</option>
          </select>
        </div>
        <div v-if="product.CategoryId == 1" class="form-group">
          <label for="FeedAge">飼料(依年齡)</label>
          <select
            id="FeedAge"
            v-model="product.FeedAgeId"
            class="form-control"
            name="FeedAge"
            required
          >
            <option value selected disabled>--請選擇--</option>
            <option
              v-for="FeedAge in FeedAges"
              :key="FeedAge.id"
              :value="FeedAge.id"
            >{{ FeedAge.age }}</option>
          </select>
        </div>
        <div v-if="product.CategoryId == 1" class="form-group">
          <label for="FeedFunction">飼料(依功能性)</label>
          <select
            id="FeedFunction"
            v-model="product.FeedFunctionId"
            class="form-control"
            name="FeedFunction"
            required
          >
            <option value selected disabled>--請選擇--</option>
            <option
              v-for="FeedFunction in FeedFunctions"
              :key="FeedFunction.id"
              :value="FeedFunction.id"
            >{{ FeedFunction.function }}</option>
          </select>
        </div>

        <div v-if="product.CategoryId !== 1&&product.CategoryId!==2" class="form-group">
          <label for="SubCategory">細項分類</label>
          <select
            id="SubCategory"
            v-model="product.SubcategoryId"
            class="form-control"
            name="SubCategory"
            required
          >
            <option value selected disabled>--請選擇--</option>
            <option
              v-for="SubCategory in SubCategories"
              :key="SubCategory.id"
              :value="SubCategory.id"
            >{{ SubCategory.name }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="ThisWeekActivity">本周活動</label>
          <select
            id="ThisWeekActivity"
            v-model="product.ThisWeekActivityId"
            class="form-control"
            name="ThisWeekActivity"
          >
            <option value selected disabled>--請選擇--</option>
            <option
              v-for="ThisWeekActivity in ThisWeekActivities"
              :key="ThisWeekActivity.id"
              :value="ThisWeekActivity.id"
            >{{ ThisWeekActivity.name }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="NewActivity">新品推薦</label>
          <select
            id="NewActivity"
            v-model="product.NewActivityId"
            class="form-control"
            name="NewActivity"
          >
            <option value selected disabled>--請選擇--</option>
            <option
              v-for="NewActivity in NewActivities"
              :key="NewActivity.id"
              :value="NewActivity.id"
            >{{ NewActivity.name }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="description">商品描述</label>
          <textarea
            id="description"
            v-model="product.description"
            type="text"
            class="form-control"
            name="description"
            placeholder="商品描述"
            required
          />
        </div>

        <div class="form-group">
          <label for="specification">產品規格</label>
          <input
            id="specification"
            v-model="product.specification"
            type="text"
            class="form-control"
            placeholder="產品規格"
            name="specification"
            required
          />
        </div>

        <div class="form-group">
          <label for="detail">產品細節</label>
          <textarea
            id="detail"
            v-model="product.detail"
            type="text"
            class="form-control"
            placeholder="產品細節"
            name="detail"
            required
          />
        </div>

        <div class="form-group">
          <label for="price">定價</label>
          <input
            id="price"
            v-model="product.price"
            type="text"
            class="form-control"
            name="price"
            required
          />
        </div>

        <div class="form-group">
          <label for="amount">庫存</label>
          <input
            id="amount"
            v-model="product.amount"
            type="text"
            class="form-control"
            name="amount"
            required
          />
        </div>

        <div class="form-group">
          <label for="image">Image</label>
          <img
            v-if="product.image"
            :src="product.image"
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
      ProductId: "",
      Categories: [],
      SubCategories: [],
      ThisWeekActivities: [],
      NewActivities: [],
      Cans: [],
      CanTypes: [],
      Feeds: [],
      FeedAges: [],
      FeedFunctions: [],
      product: {
        name: "",
        description: "",
        image: "",
        amount: null,
        specification: "",
        price: null,
        detail: "",
        CanId: "",
        CanTypeId: "",
        FeedId: "",
        FeedAgeId: "",
        FeedFunctionId: "",
        CategoryId: "",
        SubcategoryId: "",
        NewActivityId: "",
        ThisWeekActivityId: ""
      },
      isLoading: true
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchEditProduct(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchEditProduct(id);
    next();
  },
  methods: {
    async fetchEditProduct(id) {
      try {
        this.ProductId = id;
        const { data, statusText } = await adminAPI.getEditProduct(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.product = data.product;
        this.Categories = data.Categories;
        this.SubCategories = data.SubCategories;
        this.ThisWeekActivities = data.ThisWeekActivities;
        this.NewActivities = data.NewActivities;
        this.Cans = data.Cans;
        this.CanTypes = data.CanTypes;
        this.Feeds = data.Feeds;
        this.FeedAges = data.FeedAges;
        this.FeedFunctions = data.FeedFunctions;
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
        const targetProductId = this.ProductId;
        const form = data.target;
        const formData = new FormData(form);
        const { statusText } = await adminAPI.editProduct({
          formData,
          targetProductId
        });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        Toast.fire({
          icon: "success",
          title: "成功修改商品資訊"
        });
        this.$router.push({ name: "AdminGetStore" });
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
