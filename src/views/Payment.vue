<template>
  <div class="inner row">
    <div class="col-2 mt-5"></div>
    <div class="col-8 mt-5 row">
      <div class="col-12">確認訂單</div>

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
          <form name="Spgateway" v-bind:action="tradeInfo.PayGateWay" method="POST">
            <input type="hidden" name="MerchantID" v-bind:value="tradeInfo.MerchantID" />
            <input type="hidden" name="TradeInfo" v-bind:value="tradeInfo.TradeInfo" />
            <input type="hidden" name="TradeSha" v-bind:value="tradeInfo.TradeSha" />
            <input type="hidden" name="Version" v-bind:value="tradeInfo.Version" />
            <button type="submit" class="btn btn-primary">前往藍新金流付款</button>
          </form>
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
      order: [],
      totalPrice: 0,
      tradeInfo: {}
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchPayment(id);
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    async fetchPayment(id) {
      try {
        const { data, statusText } = await cartAPI.payments.getPayment(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.order = data.order;
        this.tradeInfo = data.tradeInfo;
        console.log(this.tradeInfo);
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法取得訂單內容,請稍後再試"
        });
      }
    }
  }
};
</script>