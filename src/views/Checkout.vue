<template>
  <div class="inner row">
    <div class="col-2 mt-5"></div>
    <div v-if="isLoading" class="col-12 forComputer">
      <dot-loader :color="color" :size="size"></dot-loader>
    </div>
    <div v-else class="forComputer container col-8 mt-5 row">
      <div class="input-group mb-3">
        <div class="col-12">
          姓名:
          <input v-model="name" type="text" class="form-control" />
        </div>
        <div class="col-12">
          電話:
          <input v-model="phone" type="number" class="form-control" />
        </div>
        <div class="col-12">
          地址:
          <input v-model="address" type="text" class="form-control" />
        </div>
      </div>
      <div class="col-12 shadow p-3 mb-5 mx-0 bg-white rounded row">
        <div class="col-3">免運資格:滿$666元，免運費!</div>
        <div class="col-6"></div>
        <div v-if="this.nowPrice > 666" class="col-3">
          已達免運標準，現省80$
        </div>
      </div>
      <div class="col-12">確認訂單內容是否正確</div>
      <div v-if="this.products.length !== 0" class="col-12">
        <div
          class="col-12 row mt-3 border-bottom"
          v-for="product in products"
          :key="product.id"
        >
          <div class="col-3">
            <img :src="product.image" width="100%" height="150px" />
          </div>
          <div class="col-5">
            <h3>{{ product.name }}</h3>
            <h4>{{ product.specification }}</h4>
          </div>
          <div class="col-2">
            <div class="col-12 inline">
              單價 :
              <font-awesome-icon icon="dollar-sign" size="2x" />
              {{ product.price }}
            </div>
            <div class="col-12">
              <div class="input-group">
                數量 :
                <button
                  :disabled="isProcessing"
                  type="button"
                  class="btn btn-link pr-0 pt-0 mt-0"
                  @click="MinusProduct(product.id)"
                >
                  <font-awesome-icon
                    :icon="['far', 'minus-square']"
                    style="color:black"
                    size="2x"
                  />
                </button>
                {{ product.CartItem.quantity }}
                <button
                  :disabled="isProcessing"
                  type="button"
                  class="btn btn-link pl-0 pt-0 mt-0"
                  @click="PlusProduct(product.id)"
                >
                  <font-awesome-icon
                    :icon="['far', 'plus-square']"
                    style="color:black"
                    size="2x"
                  />
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
              <font-awesome-icon
                :icon="['fas', 'times-circle']"
                style="color:red"
                size="2x"
              />
            </button>
          </div>
        </div>
      </div>
      <div v-else class="col-12">購物車內還沒有商品唷!</div>
      <div class="col-12"></div>
      <div class="col-4"></div>
      <div class="col-4 text-right">
        <h4>小計 :{{ nowPrice }}</h4>
        <h4 v-if="this.nowPrice < 666">運費 :{{ shipping }}</h4>
        <h4 v-else>運費 :免運費!</h4>
        <h3>總計 :{{ totalPrice }}</h3>
      </div>
      <div v-if="this.products.length !== 0" class="col-4 mt-3">
        <b-button
          :disabled="isProcessing"
          variant="danger"
          @click="postOrder(currentUser.id)"
          >提交訂單</b-button
        >
      </div>
      <div v-else class="col-4 text-center">
        <router-link :to="{ name: 'cats' }">
          <b-button variant="danger" style="width:50%;">來去逛逛</b-button>
        </router-link>
      </div>
    </div>
    <div v-if="isLoading" class="col-12 forMobile">
      <dot-loader :color="color" :size="size"></dot-loader>
    </div>
    <div v-else class="forMobile container col-12 mt-5 row">
      <div class="input-group mb-3">
        <div class="col-12">
          姓名:
          <input v-model="name" type="text" class="form-control" />
        </div>
        <div class="col-12">
          電話:
          <input v-model="phone" type="number" class="form-control" />
        </div>
        <div class="col-12">
          地址:
          <input v-model="address" type="text" class="form-control" />
        </div>
      </div>
      <div class="col-12 shadow p-3 mb-5 mx-0 bg-white rounded row">
        <div class="col-3">免運資格:滿$666元，免運費!</div>
        <div class="col-6"></div>
        <div v-if="this.nowPrice > 666" class="col-3">
          已達免運標準，現省80$
        </div>
      </div>
      <div class="col-12">確認訂單內容是否正確</div>
      <div v-if="this.products.length !== 0" class="col-12">
        <div
          class="col-12 row mt-3 border-bottom"
          v-for="product in products"
          :key="product.id"
        >
          <div class="col-3">
            <img :src="product.image" width="100px" height="100px" />
          </div>
          <div class="col-5">
            <h5>{{ product.name }}</h5>
            <h6>{{ product.specification }}</h6>
          </div>
          <div class="col-2">
            <div class="col-12 inline">
              單價 :
              <font-awesome-icon icon="dollar-sign" size="2x" />
              {{ product.price }}
            </div>
            <div class="col-12">
              <div class="input-group">
                數量 :
                <button
                  :disabled="isProcessing"
                  type="button"
                  class="btn btn-link pr-0 pt-0 mt-0"
                  @click="MinusProduct(product.id)"
                >
                  <font-awesome-icon
                    :icon="['far', 'minus-square']"
                    style="color:black"
                    size="2x"
                  />
                </button>
                {{ product.CartItem.quantity }}
                <button
                  :disabled="isProcessing"
                  type="button"
                  class="btn btn-link pl-0 pt-0 mt-0"
                  @click="PlusProduct(product.id)"
                >
                  <font-awesome-icon
                    :icon="['far', 'plus-square']"
                    style="color:black"
                    size="2x"
                  />
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
              <font-awesome-icon
                :icon="['fas', 'times-circle']"
                style="color:red"
                size="2x"
              />
            </button>
          </div>
        </div>
      </div>
      <div v-else class="col-12">購物車內還沒有商品唷!</div>
      <div class="col-12"></div>
      <div class="col-4"></div>
      <div class="col-4 text-right">
        <h5>小計 :{{ nowPrice }}</h5>
        <h5 v-if="this.nowPrice < 666">運費 :{{ shipping }}</h5>
        <h5 v-else>運費 :免運費!</h5>
        <h4>總計 :{{ totalPrice }}</h4>
      </div>
      <div v-if="this.products.length !== 0" class="col-4 mt-3">
        <b-button
          :disabled="isProcessing"
          variant="danger"
          @click="postOrder(currentUser.id)"
          >提交訂單</b-button
        >
      </div>
      <div v-else class="col-4 text-center">
        <router-link :to="{ name: 'cats' }">
          <b-button variant="danger" style="width:50%;">來去逛逛</b-button>
        </router-link>
      </div>
    </div>
    <div class="col-2 mt-5"></div>
  </div>
</template>
<script>
import cartAPI from "../apis/cart";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers.js";
import DotLoader from "vue-spinner/src/DotLoader";
export default {
  components: { DotLoader },
  data() {
    return {
      products: [],
      nowPrice: 0,
      shipping: 80,
      totalPrice: 0,
      name: "",
      phone: "",
      address: "",
      isLoading: true,
      isProcessing: false,
      color: "#F5B7B1",
      size: "200px",
    };
  },
  created() {
    this.fetchCheckoutCart();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    async fetchCheckoutCart() {
      try {
        const { data, statusText } = await cartAPI.carts.getCheckoutCart(
          localStorage.getItem("cartId")
        );
        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.products = data.cart.items;
        this.nowPrice = data.totalPrice;
        this.name = data.user.name;
        this.phone = data.user.phone;
        this.address = data.user.address;
        if (666 < this.nowPrice) {
          this.totalPrice = this.nowPrice;
        } else {
          this.totalPrice = this.nowPrice + this.shipping;
        }
        this.isLoading = false;
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法取得購物車內商品,請稍後再試",
        });
      }
    },
    async MinusProduct(id) {
      try {
        this.isProcessing = true;
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
            if (this.products[i].CartItem.quantity > 1) {
              const { data, statusText } = await cartAPI.carts.subCartItem(
                this.products[i].CartItem.id
              );
              if (statusText !== "OK") {
                throw new Error(statusText);
              }
              console.log(data);
              this.products[i].CartItem.quantity -= 1;
              this.nowPrice -= this.products[i].price;
              this.totalPrice = this.nowPrice + this.shipping;
            }
          }
        }
        this.isProcessing = false;
      } catch {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "目前無法使用購物車,請稍後再試",
        });
      }
    },
    async PlusProduct(id) {
      try {
        this.isProcessing = true;
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
            if (this.products[i].CartItem.quantity < this.products[i].amount) {
              if (this.products[i].CartItem.quantity < 9) {
                const { data, statusText } = await cartAPI.carts.addCartItem(
                  this.products[i].CartItem.id
                );
                if (statusText !== "OK") {
                  throw new Error(statusText);
                }
                console.log(data);
                this.products[i].CartItem.quantity += 1;
                this.nowPrice += this.products[i].price;
                this.totalPrice = this.nowPrice + this.shipping;
              }
              this.isProcessing = false;
            } else {
              this.isProcessing = false;
              Toast.fire({
                icon: "warning",
                title: "庫存不足，不能再多買拉!",
              });
            }
          }
        }
      } catch {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "目前無法使用購物車,請稍後再試",
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
              (product) => product.CartItem.id !== deleteTargetId
            );
          }
        }
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法刪除該物品,請稍後再試",
        });
      }
    },
    async postOrder(id) {
      try {
        this.isProcessing = true;
        let phoneNumber = 0;
        phoneNumber = parseInt(this.phone);
        if (
          this.phone.length == 0 ||
          this.name.length == 0 ||
          this.address.length == 0
        ) {
          Toast.fire({
            icon: "error",
            title: "所有欄位都是必填!",
          });
          return;
        }
        if (this.phone.length !== 10 || isNaN(phoneNumber)) {
          Toast.fire({
            icon: "error",
            title: "電話欄只能輸入長度為10的數字!",
          });
          return;
        }
        //檢查完欄位後，送出訂單
        const { data, statusText } = await cartAPI.orders.postOrder({
          cartId: localStorage.getItem("cartId"),
          userId: id,
          name: this.name,
          phone: this.phone,
          address: this.address,
          amount: this.totalPrice,
        });
        if (statusText !== "OK" || data.status == "error") {
          throw new Error(statusText);
        }
        localStorage.removeItem("cartId");
        Toast.fire({
          icon: "success",
          title: "成功新增訂單!",
        });
        this.isProcessing = false;
        this.$router.push("/orders");
      } catch {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "目前無法成立,請稍後再試",
        });
      }
    },
  },
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
