<template>
  <div class="inner row">
    <div class="col-2 mt-5"></div>
    <div class="col-8 mt-5 row">
      <div class="col-12">確認訂單</div>

      <div class="col-12 row mt-1" v-for="product in order.items" :key="'B'+product.id">
        <div class="col-5">
          <h4>{{product.name}}</h4>
          <h5>{{product.specification}}</h5>
        </div>
        <div class="col-3">
          數量:{{product.OrderItem.quantity}}
          單價:{{product.price}}
          小計:{{product.OrderItem.quantity*product.price}}
        </div>
      </div>
      <div class="col-3 border-top">
        <h6 v-if="order.amount<666">運費:80 (滿666免運)</h6>
        <h4 v-else>運費 : 免運費!</h4>
        <div v-if="currentUser.rank == '一般會員'">
          <h3>總計 :{{order.amount}}</h3>
          <h5></h5>
        </div>
        <div v-if="currentUser.rank == '黃金會員'">
          <b-badge variant="warning">黃金會員 :再享75折</b-badge>
          <h3>總計 :{{Math.floor(order.amount*0.75)}}</h3>
          <h6>Master Cat 幫您省下了{{order.amount-Math.floor(order.amount*0.75)}}元，太棒啦!</h6>
        </div>
        <div v-if="currentUser.rank == '白銀會員'">
          <b-badge variant="warning">白銀會員 :再享85折</b-badge>
          <h3>總計 :{{Math.floor(order.amount*0.85)}}</h3>
          <h6>Master Cat 幫您省下了</h6>
          <h6 style="color:red;">{{order.amount-Math.floor(order.amount*0.85)}}</h6>
          <h6>元，太棒啦!</h6>
        </div>
      </div>
      <div class="col-3 column border-top">
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