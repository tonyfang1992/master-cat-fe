<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="Menu col-3 mt-5">
      <Menu />
    </div>
    <div class="forComputer container col-7 mt-5">
      <div class="col-12">
        <img :src="NewActivity.image" width="100%" height="300px" />
        <router-link to="/cats" class="mr-5">
          <span>首頁</span>
        </router-link>
        <span>/</span>
        <span>{{ NewActivity.name }}</span>
      </div>
      <div class="col-12 mt-3 mb-5">
        <span>{{ NewActivity.description }}</span>
      </div>
      <TopSales :TopProducts="NewActivityTopProducts" :NewProducts="NewActivityNewProducts" />
      <TopSales :TopProducts="TopProducts" :NewProducts="NewProducts" />
    </div>
    <div class="forMobile container col-12 mt-5">
      <div class="col-12">
        <img :src="NewActivity.image" width="100%" height="300px" />
        <router-link to="/cats" class="mr-5">
          <span>首頁</span>
        </router-link>
        <span>/</span>
        <span>{{ NewActivity.name }}</span>
      </div>
      <div class="col-12 mt-3 mb-5">
        <span>{{ NewActivity.description }}</span>
      </div>
      <TopSales :TopProducts="NewActivityTopProducts" :NewProducts="NewActivityNewProducts" />
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
    TopSales
  },
  data() {
    return {
      TopProducts: [],
      NewProducts: [],
      NewActivityTopProducts: [],
      NewActivityNewProducts: [],
      NewActivity: {}
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchNewActivity(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchNewActivity(id);
    next();
  },
  methods: {
    async fetchNewActivity(id) {
      try {
        const { data, statusText } = await categoryAPI.NewActivity.get(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.TopProducts = data.TopProducts;
        this.NewProducts = data.NewProducts;
        this.NewActivityTopProducts = data.NewActivityTopProducts;
        this.NewActivityNewProducts = data.NewActivityNewProducts;
        this.NewActivity = data.NewActivity;
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