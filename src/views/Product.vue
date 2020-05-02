<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="Menu col-3 mt-5">
      <Menu />
    </div>
    <div class="forComputer container col-7 row mt-5">
      <div class="col-6">
        <img :src="product.image" style="width:320px; height:240px;" />
      </div>
      <div class="col-6">
        <div class="div">
          <h2>{{product.name}}</h2>
        </div>
        <div class="div mt-2">
          <h6>{{product.description}}</h6>
        </div>
        <!-- <div class="div mt-2">折扣 : {{product.discount}} 折</div> -->
        <div class="div mt-2">價格 : {{product.price}} 元</div>
        <div class="div mt-2">庫存 : {{product.amount}} 件</div>
        <div class="col-12 row mt-3">
          <div v-if="product.amount !== 0" class="input-group mb-3 col-6">
            數量 :
            <button type="button" class="btn btn-link pr-0 pt-0 mt-0" @click="MinusProduct">
              <font-awesome-icon :icon="['far','minus-square']" style="color:black" size="2x" />
            </button>
            {{count}}
            <button
              type="button"
              class="btn btn-link pl-0 pt-0 mt-0"
              @click="PlusProduct"
            >
              <font-awesome-icon :icon="['far','plus-square']" style="color:black" size="2x" />
            </button>
          </div>
          <div v-if="product.amount !== 0" class="col-6">
            <button
              type="button"
              class="btn btn-info"
              @click="
              postCart({ product: product.name, productId: product.id })
            "
            >加入購物車</button>
          </div>
          <div v-else class="col-12">
            <h1 style="color:red;">慢了一步 完售!</h1>
          </div>
        </div>
      </div>
      <div class="col-12">
        <b-nav tabs justified>
          <b-nav-item>描述</b-nav-item>
          <b-nav-item>規格</b-nav-item>
          <b-nav-item>說明</b-nav-item>
        </b-nav>
        <div>---描述---</div>
        <p>{{product.detail}}</p>
        <div>---規格---</div>
        <pre>{{product.specification}}</pre>
        <div>---說明---</div>
        <pre>本商品無法限制配送條件</pre>
      </div>
      <TopSales :TopProducts="SubCategoryTopProducts" :NewProducts="SubCategoryNewProducts" />
    </div>
    <div class="forMobile container col-12 row mt-5">
      <div class="col-6">
        <img :src="product.image" style="width:320px; height:240px;" />
      </div>
      <div class="col-6">
        <div class="div">
          <h2>{{product.name}}</h2>
        </div>
        <div class="div mt-2">
          <h6>{{product.description}}</h6>
        </div>
        <!-- <div class="div mt-2">折扣 : {{product.discount}} 折</div> -->
        <div class="div mt-2">價格 : {{product.price}} 元</div>
        <div class="div mt-2">庫存 : {{product.amount}} 件</div>
        <div class="col-12 row mt-3">
          <div v-if="product.amount !== 0" class="input-group mb-3 col-6">
            數量 :
            <button type="button" class="btn btn-link pr-0 pt-0 mt-0" @click="MinusProduct">
              <font-awesome-icon :icon="['far','minus-square']" style="color:black" size="2x" />
            </button>
            {{count}}
            <button
              type="button"
              class="btn btn-link pl-0 pt-0 mt-0"
              @click="PlusProduct"
            >
              <font-awesome-icon :icon="['far','plus-square']" style="color:black" size="2x" />
            </button>
          </div>
          <div v-if="product.amount !== 0" class="col-6">
            <button
              type="button"
              class="btn btn-info"
              @click="
              postCart({ product: product.name, productId: product.id })
            "
            >加入購物車</button>
          </div>
          <div v-else class="col-12">
            <h1 style="color:red;">慢了一步 完售!</h1>
          </div>
        </div>
      </div>
      <div class="col-12">
        <b-nav tabs justified>
          <b-nav-item>描述</b-nav-item>
          <b-nav-item>規格</b-nav-item>
          <b-nav-item>說明</b-nav-item>
        </b-nav>
        <div>---描述---</div>
        <p>{{product.detail}}</p>
        <div>---規格---</div>
        <pre>{{product.specification}}</pre>
        <div>---說明---</div>
        <pre>本商品無法限制配送條件</pre>
      </div>
      <TopSales :TopProducts="SubCategoryTopProducts" :NewProducts="SubCategoryNewProducts" />
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
import Menu from "../components/Menu";
import TopSales from "../components/TopSales";
import categoryAPI from "../apis/product";
import cartAPI from "../apis/cart";
import { Toast } from "../utils/helpers";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    Menu,
    TopSales
  },
  data() {
    return {
      product: [],
      count: 1,
      SubCategoryTopProducts: [],
      SubCategoryNewProducts: []
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchProduct(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchProduct(id);
    next();
  },
  methods: {
    async fetchProduct(id) {
      try {
        const { data, statusText } = await categoryAPI.product.get(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.product = data.product[0];
        this.SubCategoryTopProducts = data.SubCategoryTopProducts;
        this.SubCategoryNewProducts = data.SubCategoryNewProducts;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得該商品資訊，請稍後再試"
        });
      }
    },
    async postCart(product) {
      try {
        if (localStorage.getItem("cartId") == null) {
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
    MinusProduct() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
    PlusProduct() {
      if (this.count < this.product.amount) {
        if (this.count < 9) {
          this.count += 1;
        }
      } else {
        Toast.fire({
          icon: "warning",
          title: "庫存不夠啦! 只有這麼多了"
        });
      }
    }
  }
};
</script>
<style scoped>
.btn-link {
  color: brown;
}
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
    display: inline-flex;
  }
  .col-2 {
    display: none;
  }
  .col-1 {
    display: none;
  }
}
</style>