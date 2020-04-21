<template>
  <div class="col-12">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          class="nav-link active"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          @click="showHotProducts"
          >熱銷</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          @click="showNewProducts"
          >最新</a
        >
      </li>
      <li v-show="showHot" class="nav-item">
        <a
          class="nav-link"
          data-toggle="tab"
          href="#contact"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          @click="sortHotPrice"
          >價格</a
        >
      </li>
      <li v-show="showNew" class="nav-item">
        <a
          class="nav-link"
          data-toggle="tab"
          href="#contact"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          @click="sortNewPrice"
          >價格</a
        >
      </li>
    </ul>
    <div class="col-12 row">
      <div
        v-show="showHot"
        class="col-3 column text-center mt-2"
        v-for="TopProduct in TopProductsAfter"
        :key="'A' + TopProduct.id"
      >
        <router-link to="#" class="mr-5">
          <img :src="TopProduct.image" width="100%" height="150px" />
        </router-link>
        <div class="product_name">
          <h4>{{ TopProduct.name }}</h4>
        </div>
        <div class="product_option">
          <span>${{ TopProduct.price }}</span>
          <font-awesome-icon icon="shopping-cart" size="1x" />
        </div>
      </div>
      <div
        v-show="showNew"
        class="col-3 column text-center mt-2"
        v-for="NewProduct in NewProductsAfter"
        :key="'C' + NewProduct.id"
      >
        <router-link to="#" class="mr-5">
          <img :src="NewProduct.image" width="100%" height="150px" />
        </router-link>
        <div class="product_name">
          <h4>{{ NewProduct.name }}</h4>
        </div>
        <div class="product_option">
          <span>${{ NewProduct.price }}</span>
          <font-awesome-icon icon="shopping-cart" size="1x" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    TopProducts: {
      type: Array,
      required: true,
    },
    NewProducts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showHot: true,
      showNew: false,
      sortHot: true,
      sortNew: true,
      TopProductsAfter: this.TopProducts,
      NewProductsAfter: this.NewProducts,
    };
  },
  watch: {
    TopProducts(TopProducts) {
      this.TopProductsAfter = {
        ...this.TopProductsAfter,
        ...TopProducts,
      };
    },
    NewProducts(NewProducts) {
      this.NewProductsAfter = {
        ...this.NewProductsAfter,
        ...NewProducts,
      };
    },
  },
  methods: {
    showHotProducts() {
      this.showHot = true;
      this.showNew = false;
    },
    showNewProducts() {
      this.showHot = false;
      this.showNew = true;
    },
    sortHotPrice() {
      if (this.sortHot) {
        this.sortHot = false;
        this.TopProductsAfter = this.TopProducts.sort(
          (a, b) => a.price - b.price
        );
      } else {
        this.sortHot = true;
        this.TopProductsAfter = this.TopProducts.sort(
          (a, b) => b.price - a.price
        );
      }
    },
    sortNewPrice() {
      if (this.sortHot) {
        this.sortHot = false;
        this.NewProductsAfter = this.NewProducts.sort(
          (a, b) => a.price - b.price
        );
      } else {
        this.sortHot = true;
        this.NewProductsAfter = this.NewProducts.sort(
          (a, b) => b.price - a.price
        );
      }
    },
  },
};
</script>
