<template>
  <div class="inner row">
    <div class="col-2 mt-5"></div>
    <div v-if="isLoading" class="col-12 forComputer">
      <dot-loader :color="color" :size="size"></dot-loader>
    </div>
    <div v-else class="forComputer container col-8 mt-5 row">
      <div class="col-12">確認訂單</div>
      <div
        class="col-12 row mt-3 border-bottom"
        v-for="order in orders"
        :key="'A' + order.id"
      >
        <div class="col-12 word">
          <h1>訂單號 #{{ order.id }}</h1>
        </div>
        <div
          class="col-8 row mt-1 word"
          v-for="product in order.items"
          :key="'B' + product.id"
        >
          <div class="col-5">
            <h4>{{ product.name }}</h4>
            <h5>{{ product.specification }}</h5>
          </div>
          <div class="col-4 word">
            <div>數量:{{ product.OrderItem.quantity }}</div>
            <div>單價:{{ product.price }}</div>
            <div>小計:{{ product.OrderItem.quantity * product.price }}</div>
          </div>
        </div>
        <div class="col-2 word">
          <h6 v-if="order.amount < 666">運費:80 (滿666免運)</h6>
          <h4 v-else>運費 : 免運費!</h4>
          <div v-if="currentUser.rank == '一般會員'">
            <h3>總計 :{{ order.amount }}</h3>
          </div>
          <div v-if="currentUser.rank == '黃金會員'">
            <b-badge variant="warning">黃金會員 :再享75折</b-badge>
            <h3>總計 :{{ Math.floor(order.amount * 0.75) }}</h3>
          </div>
          <div v-if="currentUser.rank == '白銀會員'">
            <b-badge variant="warning">白銀會員 :再享85折</b-badge>
            <h3>總計 :{{ Math.floor(order.amount * 0.85) }}</h3>
          </div>
        </div>
        <div v-if="order.payment_status == '完成付款'" class="col-2">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="pay"
            size="2x"
          />已付款
        </div>
        <div v-else-if="order.payment_status == '取消訂單'" class="col-2">
          已取消訂單，還是想買?
          <router-link :to="{ name: 'payment', params: { id: order.id } }">
            <button type="button" class="btn btn-primary pl-0 pt-0 mt-0 mb-1">
              立即付款
            </button>
          </router-link>
        </div>
        <div v-else class="col-2 column">
          <div>
            <router-link :to="{ name: 'payment', params: { id: order.id } }">
              <button type="button" class="btn btn-primary pl-0 pt-0 mt-0 mb-1">
                立即付款
              </button>
            </router-link>
          </div>
          <div class="mt-1">
            <button
              type="button"
              class="btn btn-danger pl-0 pt-0 mt-0"
              @click="DeleteOrder(order.id)"
            >
              取消訂單
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="col-12 forMobile">
      <dot-loader :color="color" :size="size"></dot-loader>
    </div>
    <div v-else class="forMobile container col-12 mt-5 row">
      <div class="col-12">確認訂單</div>
      <div
        class="col-12 row mt-3 border-bottom"
        v-for="order in orders"
        :key="'A' + order.id"
      >
        <div class="col-12 word">
          <h1>訂單號 #{{ order.id }}</h1>
        </div>
        <div class="col-6">
          <div
            class="col-12 row mt-1 word"
            v-for="product in order.items"
            :key="'B' + product.id"
          >
            <div class="col-8">
              <h6>{{ product.name }}</h6>
              <h6>{{ product.specification }}</h6>
            </div>
            <div class="col-4 word column">
              <div>數量:{{ product.OrderItem.quantity }}</div>
              <div>單價:{{ product.price }}</div>
              <div>小計:{{ product.OrderItem.quantity * product.price }}</div>
            </div>
          </div>
        </div>

        <div class="col-3 word">
          <h6 v-if="order.amount < 666">運費:80 (滿666免運)</h6>
          <h4 v-else>運費 : 免運費!</h4>
          <div v-if="currentUser.rank == '一般會員'">
            <h5>總計 :{{ order.amount }}</h5>
          </div>
          <div v-if="currentUser.rank == '黃金會員'">
            <b-badge variant="warning">黃金會員 :再享75折</b-badge>
            <h5>總計 :{{ Math.floor(order.amount * 0.75) }}</h5>
          </div>
          <div v-if="currentUser.rank == '白銀會員'">
            <b-badge variant="warning">白銀會員 :再享85折</b-badge>
            <h5>總計 :{{ Math.floor(order.amount * 0.85) }}</h5>
          </div>
        </div>
        <div v-if="order.payment_status == '完成付款'" class="col-3">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="pay"
            size="2x"
          />已付款
        </div>
        <div v-else-if="order.payment_status == '取消訂單'" class="col-3">
          已取消訂單，還是想買?
          <router-link :to="{ name: 'payment', params: { id: order.id } }">
            <button type="button" class="btn btn-primary pl-0 pt-0 mt-0 mb-1">
              立即付款
            </button>
          </router-link>
        </div>
        <div v-else class="col-3 column">
          <div>
            <router-link :to="{ name: 'payment', params: { id: order.id } }">
              <button type="button" class="btn btn-primary pl-0 pt-0 mt-0 mb-1">
                立即付款
              </button>
            </router-link>
          </div>
          <div class="mt-1">
            <button
              type="button"
              class="btn btn-danger pl-0 pt-0 mt-0"
              @click="DeleteOrder(order.id)"
            >
              取消訂單
            </button>
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
import DotLoader from "vue-spinner/src/DotLoader";
export default {
  components: { DotLoader },
  data() {
    return {
      orders: [],
      color: "#F5B7B1",
      size: "200px",
      isLoading: true,
    };
  },
  created() {
    this.fetchOrders();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
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
        this.isLoading = false;
      } catch {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "目前無法取得訂單內容,請稍後再試",
        });
      }
    },
    async DeleteOrder(id) {
      try {
        const { statusText } = await cartAPI.orders.cancelOrder(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        for (let i = 0; i < this.orders.length; i++) {
          if (this.orders[i].id == id) {
            this.orders[i].payment_status = "取消訂單";
          }
        }
        Toast.fire({
          icon: "success",
          title: "成功取消訂單",
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法刪除",
        });
      }
    },
  },
};
</script>
<style scoped>
.pay {
  color: green;
}
.word {
  color: #4d4d4d;
}
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
