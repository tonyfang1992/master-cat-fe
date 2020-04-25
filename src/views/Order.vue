<template>
  <div class="inner row">
    <div class="col-2 mt-5"></div>
    <div class="col-8 mt-5 row">
      <div class="col-12">確認訂單</div>
      <div class="col-12 row mt-3 border-bottom" v-for="order in orders" :key="'A'+order.id">
        <div class="col-8 row mt-1" v-for="product in order.items" :key="'B'+product.id">
          <div class="col-3">
            <img src="https://via.placeholder.com/150" />
          </div>
          <div class="col-5">
            <h4>{{product.name}}</h4>
            <h5>{{product.specification}}</h5>
          </div>
          <div class="col-4">
            數量:{{product.OrderItem.quantity}}
            單價:{{product.price}}
            小計:{{product.OrderItem.quantity*product.price}}
          </div>
        </div>
        <div class="col-2">
          <h3>總計 :{{order.amount}}</h3>
        </div>
        <div class="col-2 column">
          <div>
            <router-link :to="{ name: 'payment', params: { id: order.id } }">
              <button type="button" class="btn btn-primary pl-0 pt-0 mt-0 mb-1">立即付款</button>
            </router-link>
          </div>
          <div class="mt-1">
            <button
              type="button"
              class="btn btn-danger pl-0 pt-0 mt-0"
              @click="DeleteOrder(order.id)"
            >取消訂單</button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-2 mt-5"></div>
  </div>
</template>
<script>
import cartAPI from "../apis/cart";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers.js";
export default {
  data() {
    return {
      orders: [],
      totalPrice: 0
    };
  },
  created() {
    this.fetchOrders();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    async fetchOrders() {
      try {
        const { data, statusText } = await cartAPI.orders.getOrders(
          this.currentUser.id
        );
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.orders = data.orders;
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法取得訂單內容,請稍後再試"
        });
      }
    },
    async DeleteOrder(id) {
      try {
        const { statusText } = await cartAPI.orders.cancelOrder(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        Toast.fire({
          icon: "success",
          title: "成功取消訂單"
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法刪除"
        });
      }
    }
  }
};
</script>