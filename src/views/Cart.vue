<template>
  <div class="inner row">
    <div class="col-2 mt-5"></div>
    <div class="forComputer container col-8 mt-5 row">
      <div class="col-12">
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
            <img src="@/assets/activity-1.png" width="100%" height="400px" />
          </slide>
          <slide>
            <img src="@/assets/activity-2.png" width="100%" height="400px" />
          </slide>
          <slide>
            <img src="@/assets/activity-3.png" width="100%" height="400px" />
          </slide>
        </carousel>
      </div>
      <div class="col-12 shadow p-3 mb-5 mx-0 bg-white rounded row">
        <div class="col-3">免運資格:滿$666元，免運費!</div>
        <div class="col-6"></div>
        <div v-if="this.nowPrice>666" class="col-3">已達免運標準，現省80$</div>
      </div>
      <div class="col-12">確認訂單</div>
      <div v-if="this.products.length !== 0" class="col-12">
        <div class="col-12 row mt-3 border-bottom" v-for="product in products" :key="product.id">
          <div class="col-3">
            <img :src="product.image" width="100%" height="150px" />
          </div>
          <div class="col-5">
            <h3>{{product.name}}</h3>
            <h4>{{product.specification}}</h4>
          </div>
          <div class="col-2">
            <div class="col-12 inline">
              單價 :
              <font-awesome-icon icon="dollar-sign" size="2x" />
              {{product.price}}
            </div>
            <div class="col-12">
              <div class="input-group">
                數量 :
                <button
                  type="button"
                  class="btn btn-link pr-0 pt-0 mt-0"
                  @click="MinusProduct(product.id)"
                >
                  <font-awesome-icon :icon="['far','minus-square']" style="color:black" size="2x" />
                </button>
                {{product.CartItem.quantity}}
                <button
                  type="button"
                  class="btn btn-link pl-0 pt-0 mt-0"
                  @click="PlusProduct(product.id)"
                >
                  <font-awesome-icon :icon="['far','plus-square']" style="color:black" size="2x" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-2">
            <button
              type="button"
              class="btn btn-link pl-0 pt-0 mt-0"
              @click="DeleteItem(product.id)"
            >
              <font-awesome-icon :icon="['fas','times-circle']" style="color:red" size="2x" />
            </button>
          </div>
        </div>
      </div>
      <div v-else class="col-12">購物車內還沒有商品唷!</div>
      <div class="col-8"></div>
      <div class="col-4 text-right">
        <h4>小計 :{{nowPrice}}</h4>
        <h4 v-if="this.nowPrice<666">運費 :{{shipping}}</h4>
        <h4 v-else>運費 : 免運費!</h4>
        <h3>總計 :{{totalPrice}}</h3>
      </div>
      <div v-if="this.products.length !== 0" class="col-12 text-center">
        <router-link :to="{name:'checkout'}">
          <b-button variant="danger" style="width:50%;">下一步</b-button>
        </router-link>
      </div>
      <div v-else class="col-12 text-center">
        <router-link :to="{name:'cats'}">
          <b-button variant="danger" style="width:50%;">來去逛逛</b-button>
        </router-link>
      </div>
    </div>
    <div class="forMobile container col-12 mt-5 row">
      <div class="col-12">
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
            <img src="@/assets/activity-1.png" width="100%" height="200px" />
          </slide>
          <slide>
            <img src="@/assets/activity-2.png" width="100%" height="200px" />
          </slide>
          <slide>
            <img src="@/assets/activity-3.png" width="100%" height="200px" />
          </slide>
        </carousel>
      </div>
      <div class="col-12 shadow p-3 mb-5 mx-0 bg-white rounded row">
        <div class="col-3">免運資格:滿$666元，免運費!</div>
        <div class="col-6"></div>
        <div v-if="this.nowPrice>666" class="col-3">已達免運標準，現省80$</div>
      </div>
      <div class="col-12">確認訂單</div>
      <div v-if="this.products.length !== 0" class="col-12">
        <div class="col-12 row mt-3 border-bottom" v-for="product in products" :key="product.id">
          <div class="col-3">
            <img :src="product.image" width="100px" height="100px" />
          </div>
          <div class="col-5">
            <h5>{{product.name}}</h5>
            <h6>{{product.specification}}</h6>
          </div>
          <div class="col-3">
            <div class="col-12 inline">
              單價 :
              <font-awesome-icon icon="dollar-sign" size="2x" />
              {{product.price}}
            </div>
            <div class="col-12">
              <div class="input-group">
                數量 :
                <button
                  type="button"
                  class="btn btn-link pr-0 pt-0 mt-0"
                  @click="MinusProduct(product.id)"
                >
                  <font-awesome-icon :icon="['far','minus-square']" style="color:black" size="2x" />
                </button>
                {{product.CartItem.quantity}}
                <button
                  type="button"
                  class="btn btn-link pl-0 pt-0 mt-0"
                  @click="PlusProduct(product.id)"
                >
                  <font-awesome-icon :icon="['far','plus-square']" style="color:black" size="2x" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-1">
            <button
              type="button"
              class="btn btn-link pl-0 pt-0 mt-0"
              @click="DeleteItem(product.id)"
            >
              <font-awesome-icon :icon="['fas','times-circle']" style="color:red" size="2x" />
            </button>
          </div>
        </div>
      </div>
      <div v-else class="col-12">購物車內還沒有商品唷!</div>
      <div class="col-8"></div>
      <div class="col-4 text-right">
        <h5>小計 :{{nowPrice}}</h5>
        <h5 v-if="this.nowPrice<666">運費 :{{shipping}}</h5>
        <h5 v-else>運費 : 免運費!</h5>
        <h4>總計 :{{totalPrice}}</h4>
      </div>
      <div v-if="this.products.length !== 0" class="col-12 text-center">
        <router-link :to="{name:'checkout'}">
          <b-button variant="danger" style="width:50%;">下一步</b-button>
        </router-link>
      </div>
      <div v-else class="col-12 text-center">
        <router-link :to="{name:'cats'}">
          <b-button variant="danger" style="width:50%;">來去逛逛</b-button>
        </router-link>
      </div>
    </div>

    <div class="col-2 mt-5"></div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import cartAPI from "../apis/cart";
import { Toast } from "../utils/helpers.js";
export default {
  components: { Carousel, Slide },
  data() {
    return {
      products: [],
      nowPrice: 0,
      shipping: 80,
      totalPrice: 0
    };
  },
  created() {
    this.fetchCart();
  },
  watch: {
    totalPrice(totalPrice) {
      this.totalPrice = totalPrice;
    }
  },
  methods: {
    async fetchCart() {
      try {
        const { data, statusText } = await cartAPI.carts.getCart(
          localStorage.getItem("cartId")
        );
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.products = data.cart.items;
        this.nowPrice = data.totalPrice;
        if (666 < this.nowPrice) {
          this.totalPrice = this.nowPrice;
        } else {
          this.totalPrice = this.nowPrice + this.shipping;
        }
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法取得購物車內商品,請稍後再試"
        });
      }
    },
    async MinusProduct(id) {
      try {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
            if (this.products[i].CartItem.quantity > 1) {
              const { statusText } = await cartAPI.carts.subCartItem(
                this.products[i].CartItem.id
              );
              if (statusText !== "OK") {
                throw new Error(statusText);
              }
              this.products[i].CartItem.quantity -= 1;
              this.nowPrice -= this.products[i].price;
              this.totalPrice = this.nowPrice + this.shipping;
            }
          }
        }
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法使用購物車,請稍後再試"
        });
      }
    },
    async PlusProduct(id) {
      try {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
            if (this.products[i].CartItem.quantity < this.products[i].amount) {
              if (this.products[i].CartItem.quantity < 9) {
                const { statusText } = await cartAPI.carts.addCartItem(
                  this.products[i].CartItem.id
                );
                if (statusText !== "OK") {
                  throw new Error(statusText);
                }
                this.products[i].CartItem.quantity += 1;
                this.nowPrice += this.products[i].price;
                this.totalPrice = this.nowPrice + this.shipping;
              }
            } else {
              Toast.fire({
                icon: "warning",
                title: "庫存不足，不能再多買拉!"
              });
            }
          }
        }
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法使用購物車,請稍後再試"
        });
      }
    },
    async DeleteItem(id) {
      try {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
            let deleteTargetId = this.products[i].CartItem.id;
            const { statusText } = await cartAPI.carts.deleteCartItem(
              deleteTargetId
            );
            if (statusText !== "OK") {
              throw new Error(statusText);
            }
            this.totalPrice = this.totalPrice - this.products[i].price;
            this.nowPrice = this.nowPrice - this.products[i].price;
            this.products = this.products.filter(
              product => product.CartItem.id !== deleteTargetId
            );
          }
        }
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法刪除該物品,請稍後再試"
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
}
</style>