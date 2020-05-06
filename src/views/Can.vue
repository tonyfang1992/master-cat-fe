<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="Menu col-3 mt-5">
      <Menu />
    </div>
    <div v-if="isLoading" class="col-7 forComputer">
      <dot-loader :color="color" :size="size"></dot-loader>
    </div>
    <div v-else class="forComputer container col-7 mt-5">
      <div class="col-12">
        <router-link to="/cats" class="mr-5">
          <span>首頁</span>
        </router-link>
        <span>/</span>
        <span>{{ Can.brand }}</span>
      </div>
      <div class="col-12 mt-3 mb-5">
        <span>{{ Can.description }}</span>
      </div>
      <TopSales :TopProducts="CanTopProducts" :NewProducts="CanNewProducts" />
      <TopSales :TopProducts="TopProducts" :NewProducts="NewProducts" />
    </div>
    <div v-if="isLoading" class="col-7 forMobile">
      <dot-loader :color="color" :size="size"></dot-loader>
    </div>
    <div v-else class="forMobile container col-12 mt-5 column">
      <div class="col-12">
        <router-link to="/cats" class="mr-5">
          <span>首頁</span>
        </router-link>
        <span>/</span>
        <span>{{ Can.brand }}</span>
      </div>
      <div class="col-12 mt-3 mb-5">
        <span>{{ Can.description }}</span>
      </div>
      <TopSales :TopProducts="CanTopProducts" :NewProducts="CanNewProducts" />
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
import DotLoader from "vue-spinner/src/DotLoader";
export default {
  components: {
    Menu,
    TopSales,
    DotLoader
  },
  data() {
    return {
      TopProducts: [],
      NewProducts: [],
      CanTopProducts: [],
      CanNewProducts: [],
      Can: {},
      isLoading: true,
      color: "#F5B7B1",
      size: "200px"
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchCan(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchCan(id);
    next();
  },
  methods: {
    async fetchCan(id) {
      try {
        const { data, statusText } = await categoryAPI.Can.get(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.TopProducts = data.TopProducts;
        this.NewProducts = data.NewProducts;
        this.CanTopProducts = data.CanTopProducts;
        this.CanNewProducts = data.CanNewProducts;
        this.Can = data.Can;
        this.isLoading = false;
      } catch {
        this.isLoading = false;
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
