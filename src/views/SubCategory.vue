<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="Menu col-3 mt-5">
      <Menu />
    </div>
    <div class="forComputer container col-7 mt-5">
      <div class="col-12">
        <router-link to="/cats" class="mr-5">
          <span>首頁</span>
        </router-link>
        <span>/</span>
        <span>{{ SubCategory.name }}</span>
      </div>
      <div class="col-12 mt-3 mb-5">
        <span>{{ SubCategory.description }}</span>
      </div>
      <TopSales :TopProducts="SubCategoryTopProducts" :NewProducts="SubCategoryNewProducts" />
      <TopSales :TopProducts="TopProducts" :NewProducts="NewProducts" />
    </div>
    <div class="forMobile container col-12 mt-5">
      <div class="col-12">
        <router-link to="/cats" class="mr-5">
          <span>首頁</span>
        </router-link>
        <span>/</span>
        <span>{{ SubCategory.name }}</span>
      </div>
      <div class="col-12 mt-3 mb-5">
        <span>{{ SubCategory.description }}</span>
      </div>
      <TopSales :TopProducts="SubCategoryTopProducts" :NewProducts="SubCategoryNewProducts" />
      <TopSales :TopProducts="TopProducts" :NewProducts="NewProducts" />
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
import Menu from "../components/Menu";
import TopSales from "../components/TopSales";
import subcategoryAPI from "../apis/category";
import { Toast } from "../utils/helpers";
export default {
  components: {
    Menu,
    TopSales
  },
  data() {
    return {
      TopProducts: [],
      NewProducts: [],
      SubCategoryTopProducts: [],
      SubCategoryNewProducts: [],
      SubCategory: {}
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchSubCategory(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchSubCategory(id);
    next();
  },
  methods: {
    async fetchSubCategory(id) {
      try {
        const { data, statusText } = await subcategoryAPI.subcategory.get(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.TopProducts = data.TopProducts;
        this.NewProducts = data.NewProducts;
        this.SubCategoryTopProducts = data.SubCategoryTopProducts;
        this.SubCategoryNewProducts = data.SubCategoryNewProducts;
        this.SubCategory = data.SubCategory;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得該分類商品，請稍後再試"
        });
      }
    }
  }
};
</script>
<style scoped>
.forMobile {
  display: none;
}
@media screen and (max-width: 768px) {
  .Menu {
    display: none;
  }
  .forComputer {
    display: none;
  }
  .forMobile {
    display: contents;
  }
  .col-2 {
    display: none;
  }
  .col-1 {
    display: none;
  }
}
</style>