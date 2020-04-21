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
        <span>新品到貨 !</span>
      </div>
      <div class="col-12 mt-3 mb-5">
        <span>新鮮好物火熱到貨!上百件貓狗飼料天然零食罐頭床窩搶先購!</span>
      </div>
      <div class="col-12 row">
        <div
          class="col-3 column text-center mt-2"
          v-for="Product in NewProducts"
          :key="'A' + Product.id"
        >
          <router-link :to="{ name: 'product', params: { id: Product.id } }" class="mr-5">
            <img :src="Product.image" width="100%" height="150px" />
          </router-link>
          <div class="product_name">
            <h4>{{ Product.name }}</h4>
          </div>
          <div class="product_option">
            <span>${{ Product.price }}</span>
            <font-awesome-icon icon="shopping-cart" size="1x" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
import Menu from "../components/Menu";
import productAPI from "../apis//product";
import { Toast } from "../utils/helpers";
export default {
  components: {
    Menu
  },
  data() {
    return {
      NewProducts: []
    };
  },

  created() {
    this.fetchNewProducts();
  },
  methods: {
    async fetchNewProducts() {
      try {
        const { data, statusText } = await productAPI.product.getNewProducts();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.NewProducts = data.NewProducts;
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
