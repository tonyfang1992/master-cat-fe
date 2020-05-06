<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="Menu col-3 mt-5">
      <Menu />
    </div>
    <div v-if="isLoading" class="col-12 forComputer">
      <dot-loader :color="color" :size="size"></dot-loader>
    </div>
    <div class="forComputer container col-7 mt-5">
      <div class="col-8">
        <b-input-group>
          <b-form-input v-model="search" placeholder="搜尋商品"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-secondary" @click="searchProducts()">搜尋</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
      <div class="col-4"></div>
      <div class="col-12 mt-3">
        搜尋結果 :
        <TopSales :TopProducts="TopProducts" :NewProducts="NewProducts" />
      </div>
    </div>
    <div v-if="isLoading" class="col-12 forMobile">
      <dot-loader :color="color" :size="size"></dot-loader>
    </div>
    <div class="forMobile container col-12 mt-5">
      <div class="col-8">
        <b-input-group>
          <b-form-input v-model="search" placeholder="搜尋商品"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-secondary" @click="searchProducts()">搜尋</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
      <div class="col-4"></div>
      <div class="col-12 mt-3">
        搜尋結果 :
        <TopSales :TopProducts="TopProducts" :NewProducts="NewProducts" />
      </div>
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
import Menu from "../components/Menu";
import TopSales from "../components/TopSales";
import productAPI from "../apis/product";
import DotLoader from "vue-spinner/src/DotLoader";
import { Toast } from "../utils/helpers";
export default {
  components: {
    Menu,
    TopSales,
    DotLoader
  },
  data() {
    return {
      search: "",
      TopProducts: [],
      NewProducts: [],
      isLoading: false,
      color: "#F5B7B1",
      size: "200px"
    };
  },
  methods: {
    async searchProducts() {
      try {
        this.isLoading = true;
        if (this.search.length == 0) {
          Toast.fire({
            icon: "warning",
            title: "請輸入關鍵字"
          });
          return;
        }
        if (this.search.length > 7) {
          Toast.fire({
            icon: "warning",
            title: "請輸入少量關鍵字"
          });
          return;
        }
        const { data, statusText } = await productAPI.product.getSearch({
          search: this.search
        });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.TopProducts = data.TopProducts;
        this.NewProducts = data.NewProducts;
        if (this.TopProducts.length == 0) {
          Toast.fire({
            icon: "warning",
            title: "找不到相關商品，請輸入少量關鍵字"
          });
        }
        this.isLoading = false;
      } catch {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "搜尋錯誤，請稍後再試"
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