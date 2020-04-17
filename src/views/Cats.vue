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
        <router-link to="#" class="mr-5">
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
        <router-link to="#" class="mr-5">
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
          <router-link to="#" class="mr-5">
            <img src="@/assets/catfeed.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">喵大飼料</h3>
          </router-link>
        </div>
        <div class="col-3 column text-center">
          <router-link to="#" class="mr-5">
            <img src="@/assets/catcan.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">喵大罐罐</h3>
          </router-link>
        </div>
        <div class="col-3 column text-center">
          <router-link to="#" class="mr-5">
            <img src="@/assets/toy.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">喵大玩具</h3>
          </router-link>
        </div>
        <div class="col-3 column text-center">
          <router-link to="#" class="mr-5">
            <img src="@/assets/water.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">餐桌飲水</h3>
          </router-link>
        </div>
        <div class="col-3 column text-center">
          <router-link to="#" class="mr-5">
            <img src="@/assets/healthy.png" width="100%" height="120px" />
            <h3 class="mt-3 text-dark">保健護理</h3>
          </router-link>
        </div>
        <div class="col-3 column text-center">
          <router-link to="#" class="mr-5">
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
  ],
  TopProducts: [
    {
      id: "331",
      img: "https://via.placeholder.com/150",
      price: 339,
      name: "AB罐罐"
    },
    {
      id: "332",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "低價ABC零食"
    },
    {
      id: "333",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "ABC零食"
    },
    {
      id: "334",
      img: "https://via.placeholder.com/150",
      price: 29,
      name: "低價ABC零食"
    },
    {
      id: "335",
      img: "https://via.placeholder.com/150",
      price: 100,
      name: "挑食秘方罐"
    },
    {
      id: "336",
      img: "https://via.placeholder.com/150",
      price: 421,
      name: "潔牙骨"
    },
    {
      id: "337",
      img: "https://via.placeholder.com/150",
      price: 234,
      name: "低價ABC飼料"
    },
    {
      id: "338",
      img: "https://via.placeholder.com/150",
      price: 566,
      name: "飲水台"
    },
    {
      id: "339",
      img: "https://via.placeholder.com/150",
      price: 222,
      name: "玩具B"
    },
    {
      id: "3310",
      img: "https://via.placeholder.com/150",
      price: 666,
      name: "喵大零食"
    },
    {
      id: "3311",
      img: "https://via.placeholder.com/150",
      price: 423,
      name: "健康零食"
    },
    {
      id: "3312",
      img: "https://via.placeholder.com/150",
      price: 1000,
      name: "玩具A"
    },
    {
      id: "3313",
      img: "https://via.placeholder.com/150",
      price: 532,
      name: "無敵零食"
    },
    {
      id: "3314",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "9527零食"
    },
    {
      id: "3315",
      img: "https://via.placeholder.com/150",
      price: 120,
      name: "貓窩"
    },
    {
      id: "33161",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "貓跳台"
    }
  ],
  NewProducts: [
    {
      id: "3316",
      img: "https://via.placeholder.com/150",
      price: 339,
      name: "nAB罐罐"
    },
    {
      id: "3326",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "n低價ABC零食"
    },
    {
      id: "3336",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "nABC零食"
    },
    {
      id: "3346",
      img: "https://via.placeholder.com/150",
      price: 29,
      name: "n低價ABC零食"
    },
    {
      id: "3356",
      img: "https://via.placeholder.com/150",
      price: 100,
      name: "n挑食秘方罐"
    },
    {
      id: "3366",
      img: "https://via.placeholder.com/150",
      price: 421,
      name: "n潔牙骨"
    },
    {
      id: "3376",
      img: "https://via.placeholder.com/150",
      price: 234,
      name: "n低價ABC飼料"
    },
    {
      id: "3386",
      img: "https://via.placeholder.com/150",
      price: 566,
      name: "n飲水台"
    },
    {
      id: "3396",
      img: "https://via.placeholder.com/150",
      price: 222,
      name: "n玩具B"
    },
    {
      id: "33106",
      img: "https://via.placeholder.com/150",
      price: 666,
      name: "n喵大零食"
    },
    {
      id: "33116",
      img: "https://via.placeholder.com/150",
      price: 423,
      name: "n健康零食"
    },
    {
      id: "33126",
      img: "https://via.placeholder.com/150",
      price: 1000,
      name: "n玩具A"
    },
    {
      id: "33136",
      img: "https://via.placeholder.com/150",
      price: 532,
      name: "n無敵零食"
    },
    {
      id: "33146",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "n9527零食"
    },
    {
      id: "33156",
      img: "https://via.placeholder.com/150",
      price: 120,
      name: "n貓窩"
    },
    {
      id: "33166",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "n貓跳台"
    }
  ]
};
import { Carousel, Slide } from "vue-carousel";
import Menu from "../components/Menu";
import TopSales from "../components/TopSales";
export default {
  components: {
    Carousel,
    Slide,
    Menu,
    TopSales
  },
  data() {
    return {
      product: [],
      TopProducts: [],
      NewProducts: []
    };
  },
  created() {
    this.fetchHomepage();
  },
  methods: {
    fetchHomepage() {
      this.products = dummyData.products;
      this.TopProducts = dummyData.TopProducts;
      this.NewProducts = dummyData.NewProducts;
    }
  }
};
</script>
<style scoped>
.category-4 {
  height: 100px;
}
</style>