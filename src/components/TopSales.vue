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
        >熱銷</a>
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
        >最新</a>
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
        >價格</a>
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
        >價格</a>
      </li>
    </ul>
    <div class="col-12 row">
      <div
        v-show="showHot"
        class="col-3 column text-center mt-2"
        v-for="TopProduct in TopProductsAfter"
        :key="'A' + TopProduct.id"
      >
        <router-link :to="{ name: 'product', params: { id: TopProduct.id } }" class="mr-5">
          <img :src="TopProduct.image" width="100%" height="150px" />
        </router-link>
        <div class="product_name">
          <h4>{{ TopProduct.name }}</h4>
        </div>
        <div class="product_option">
          <span>${{ TopProduct.price }}</span>
          <button
            type="button"
            class="btn btn-link pl-0 pt-0 mt-0"
            @click="
              postCart({ product: TopProduct.name, productId: TopProduct.id })
            "
          >
            <font-awesome-icon icon="shopping-cart" size="1x" />
          </button>
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
          <button
            type="button"
            class="btn btn-link pl-0 pt-0 mt-0"
            @click="
              postCart({ product: NewProduct.name, productId: NewProduct.id })
            "
          >
            <font-awesome-icon icon="shopping-cart" size="1x" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cartAPI from "../apis/cart";
import { Toast } from "../utils/helpers";
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    TopProducts: {
      type: Array,
      required: true
    },
    NewProducts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showHot: true,
      showNew: false,
      sortHot: true,
      sortNew: true,
      TopProductsAfter: this.TopProducts,
      NewProductsAfter: this.NewProducts
    };
  },
  watch: {
    TopProducts(TopProducts) {
      this.TopProductsAfter = {
        ...this.TopProductsAfter,
        ...TopProducts
      };
    },
    NewProducts(NewProducts) {
      this.NewProductsAfter = {
        ...this.NewProductsAfter,
        ...NewProducts
      };
    }
  },
  methods: {
    async postCart(product) {
      try {
        if (localStorage.getItem("cartId").length == 0) {
          localStorage.setItem("cartId", uuidv4());
        }

        const { data, statusText } = await cartAPI.carts.postCart({
          productId: product.productId,
          cartId: localStorage.getItem("cartId")
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        Toast.fire({
          icon: "success",
          title: `成功將商品 - ${product.product} - 加入購物車`
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法購買該商品，請重新整理"
        });
      }
    },
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
    }
  }
};
</script>
