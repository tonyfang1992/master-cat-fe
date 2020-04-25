<template>
  <div class="inner row">
    <div class="col-1"></div>
    <div class="container col-10">
      <carousel
        :autoplay="true"
        :minSwipeDistance="40"
        :scrollPerPage="true"
        :speed="500"
        :perPage="1"
        :paginationPadding="10"
        :paginationSize="10"
        :loop="true"
      >
        <slide>
          <img src="@/assets/activity-1.png" width="100%" height="650px" />
        </slide>
        <slide>
          <img src="@/assets/activity-2.png" width="100%" height="650px" />
        </slide>
        <slide>
          <img src="@/assets/activity-3.png" width="100%" height="650px" />
        </slide>
      </carousel>
    </div>
    <div class="col-1"></div>
    <div class="col-1"></div>
    <div class="container col-3">
      <Menu />
    </div>
    <div class="category-4 container col-7 row">
      <div class="col-3 column text-center">
        <router-link :to="{name:'NewProduct'}" class="mr-5">
          <font-awesome-icon icon="shipping-fast" size="7x" />
          <h3 class="mt-3">新品到貨</h3>
        </router-link>
      </div>
      <div class="col-3 column text-center">
        <router-link to="#" class="mr-5">
          <font-awesome-icon icon="award" size="7x" />
          <h3 class="mt-3">飼料優惠</h3>
        </router-link>
      </div>
      <div class="col-3 column text-center">
        <router-link :to="{name:'HotProduct'}" class="mr-5">
          <font-awesome-icon icon="fire-alt" size="7x" />
          <h3 class="mt-3">熱銷商品</h3>
        </router-link>
      </div>
      <div class="col-3 column text-center">
        <router-link to="#" class="mr-5">
          <font-awesome-icon icon="bolt" size="7x" />
          <h3 class="mt-3">絕版出清</h3>
        </router-link>
      </div>
      <div class="col-12">
        <img src="@/assets/1.png" width="100%" height="100%" />
      </div>
      <div class="col-12 row">
        <div class="col-3 column text-center">
          <router-link :to="{ name: 'category', params: { id: 1 } }" class="mr-5">
            <img src="@/assets/catfeed.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">喵大飼料</h3>
          </router-link>
        </div>
        <div class="col-3 column text-center">
          <router-link :to="{ name: 'category', params: { id: 2 } }" class="mr-5">
            <img src="@/assets/catcan.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">喵大罐罐</h3>
          </router-link>
        </div>
        <div class="col-3 column text-center">
          <router-link :to="{ name: 'category', params: { id: 5 } }" class="mr-5">
            <img src="@/assets/toy.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">喵大玩具</h3>
          </router-link>
        </div>
        <div class="col-3 column text-center">
          <router-link :to="{ name: 'category', params: { id: 4 } }" class="mr-5">
            <img src="@/assets/water.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">餐桌飲水</h3>
          </router-link>
        </div>
        <div class="col-3 column text-center">
          <router-link :to="{ name: 'category', params: { id: 6 } }" class="mr-5">
            <img src="@/assets/healthy.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">保健護理</h3>
          </router-link>
        </div>
        <div class="col-3 column text-center">
          <router-link :to="{ name: 'category', params: { id: 3 } }" class="mr-5">
            <img src="@/assets/catfeed-1.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">肉乾零食</h3>
          </router-link>
        </div>
      </div>
      <div class="col-12">
        <img src="@/assets/2.png" width="100%" height="100%" />
      </div>
      <div class="col-12 row">
        <div class="col-3 column text-center mt-2" v-for="product in products" :key="product.id">
          <router-link to="#" class="mr-5">
            <img :src="product.img" width="100%" height="150px" />
          </router-link>
        </div>
      </div>
      <div class="clo-12 container text-center">
        <h3>❤ 本月銷售TOP! 最多喵皇欽點好物!</h3>
      </div>
      <TopSales :TopProducts="TopProducts" :NewProducts="NewProducts" />
    </div>
    <div class="col-1"></div>
  </div>
</template>
<script>
const dummyData = {
  products: [
    { id: "1", img: "https://via.placeholder.com/150" },
    { id: "2", img: "https://via.placeholder.com/150" },
    { id: "3", img: "https://via.placeholder.com/150" },
    { id: "4", img: "https://via.placeholder.com/150" },
    { id: "5", img: "https://via.placeholder.com/150" },
    { id: "6", img: "https://via.placeholder.com/150" },
    { id: "7", img: "https://via.placeholder.com/150" },
    { id: "8", img: "https://via.placeholder.com/150" },
    { id: "9", img: "https://via.placeholder.com/150" },
    { id: "10", img: "https://via.placeholder.com/150" },
    { id: "11", img: "https://via.placeholder.com/150" },
    { id: "12", img: "https://via.placeholder.com/150" },
    { id: "13", img: "https://via.placeholder.com/150" },
    { id: "14", img: "https://via.placeholder.com/150" },
    { id: "15", img: "https://via.placeholder.com/150" },
    { id: "16", img: "https://via.placeholder.com/150" }
  ]
};
import { Carousel, Slide } from "vue-carousel";
import Menu from "../components/Menu";
import TopSales from "../components/TopSales";
import productAPI from "../apis/product";
import { Toast } from "../utils/helpers";
export default {
  components: {
    Carousel,
    Slide,
    Menu,
    TopSales
  },
  data() {
    return {
      products: [],
      TopProducts: [],
      NewProducts: []
    };
  },
  created() {
    this.fetchHomepage();
  },
  methods: {
    async fetchHomepage() {
      try {
        const { data, statusText } = await productAPI.product.getTopProducts();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.products = dummyData.products;
        this.TopProducts = data.TopProducts;
        this.NewProducts = data.NewProducts;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得該熱銷商品，請稍後再試"
        });
      }
    }
  }
};
</script>
<style scoped>
.category-4 {
  height: 100px;
}
</style>
