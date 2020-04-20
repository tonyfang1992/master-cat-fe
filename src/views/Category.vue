<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="col-3 mt-5">
      <Menu />
    </div>
    <div class="col-7 mt-5">
      <div class="col-12">
        <router-link to="/cats" class="mr-5">
          <span>首頁</span>
        </router-link>
        <span>/</span>
        <span>{{ category.name }}</span>
      </div>
      <div class="col-12 mt-3 mb-5">
        <span>{{ category.description }}</span>
      </div>
      <TopSales
        :TopProducts="CategoryTopProducts"
        :NewProducts="CategoryNewProducts"
      />
      <TopSales :TopProducts="TopProducts" :NewProducts="NewProducts" />
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
import Menu from "../components/Menu";
import TopSales from "../components/TopSales";
import categoryAPI from "../apis/category";
import { Toast } from "../utils/helpers";
export default {
  components: {
    Menu,
    TopSales,
  },
  data() {
    return {
      TopProducts: [],
      NewProducts: [],
      CategoryTopProducts: [],
      CategoryNewProducts: [],
      category: {},
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchCategory(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchCategory(id);
    next();
  },
  methods: {
    async fetchCategory(id) {
      try {
        const { data, statusText } = await categoryAPI.category.get(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.TopProducts = data.TopProducts;
        this.NewProducts = data.NewProducts;
        this.CategoryTopProducts = data.CategoryTopProducts;
        this.CategoryNewProducts = data.CategoryNewProducts;
        this.category = data.category;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得該分類商品，請稍後再試",
        });
      }
    },
  },
};
</script>
