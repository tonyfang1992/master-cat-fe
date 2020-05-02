<template>
  <div class="forMobile text-center col-12 row pt-2 ml-0 mr-0">
    <div class="col-3 mt-1">
      <router-link
        v-if="currentUser.role !== 'admin' && currentUser.role !== 'customer'"
        to="/signin"
        class="text-dark mr-3"
      >
        <i class="pv3 ph2 ma0 link grow">
          <font-awesome-icon icon="user" size="2x" />
        </i>
      </router-link>
      <router-link
        v-if="currentUser.role == 'admin' || currentUser.role == 'customer'"
        :to="{ name: 'profile', params: { id: currentUser.id } }"
        class="text-dark mr-3"
      >
        <i class="pv3 ph2 ma0 link grow">
          <font-awesome-icon icon="user" size="2x" />
        </i>
      </router-link>
    </div>
    <div class="col-3 mt-1">
      <router-link :to="{name:'cart'}" class="text-dark mr-3">
        <i class="pv3 ph2 ma0 link grow">
          <font-awesome-icon icon="shopping-cart" size="2x" />
        </i>
      </router-link>
    </div>
    <div class="col-3 mt-1">
      <button type="button" class="btn btn-link pl-0 pt-0 mt-0">
        <i class="pv3 ph2 ma0 link grow" @click="goOrder(currentUser.id)">
          <font-awesome-icon icon="clipboard-list" style="color:black" size="2x" />
        </i>
      </button>
    </div>
    <div class="col-3 mt-1">
      <b-button id="suggest" v-b-toggle.sidebar-1 class="mr-2" @click="getCat()">
        <font-awesome-icon icon="paw" size="2x" />
      </b-button>
      <b-sidebar id="sidebar-1" shadow>
        <div class="text-center mt-3">
          <font-awesome-icon icon="paw" size="10x" />
        </div>
        <div v-if="hasCat" class="px-3 py-2">
          <h3>貓老大伙食建議</h3>
          <p>以下根據"{{cat.name}}"的年齡、體重，推薦您最棒的東西喔!</p>
          <router-link
            v-for="FeedAge in FeedAge"
            :key="'h'+FeedAge.id"
            :to="{ name: 'feedage', params: { id: FeedAge.id } }"
          >
            <b-list-group-item class="word">{{ FeedAge.age }}</b-list-group-item>
          </router-link>
          <div v-for="FeedFunction in FeedFunction" :key="'h'+FeedFunction.id">
            <p>{{FeedFunction.description}}</p>
            <router-link :to="{ name: 'feedfunction', params: { id: FeedFunction.id } }">
              <b-list-group-item class="word">{{ FeedFunction.function }}</b-list-group-item>
            </router-link>
          </div>
        </div>
        <div v-else class="px-3 py-2">
          <p>快來去登錄您家的貓咪吧!</p>
          <router-link :to="{name:'profile',params: { id: currentUser.id }}">
            <b-list-group-item class="word">新增愛貓</b-list-group-item>
          </router-link>
        </div>
        <div class="text-center">
          <font-awesome-icon icon="paw" size="10x" />
        </div>
      </b-sidebar>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import cartAPI from "../apis/cart";
import catAPI from "../apis/cat";
import { Toast } from "../utils/helpers";
export default {
  data() {
    return {
      FeedAge: [],
      FeedFunction: [],
      cat: [],
      hasCat: false
    };
  },

  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    async getCat() {
      try {
        const { data, statusText } = await catAPI.getCat(this.currentUser.id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        if (data.cat !== null) {
          this.FeedAge = data.FeedAge;
          this.FeedFunction = data.FeedFunction;
          this.cat = data.cat;
          this.hasCat = true;
        }
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得您的貓咪資料，請稍後再試"
        });
      }
    },
    async goOrder(UserId) {
      try {
        const { statusText } = await cartAPI.orders.getOrders(UserId);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.$router.push("/orders");
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法查看訂單，請稍後再試"
        });
      }
    }
  }
};
</script>
<style scoped>
.word {
  color: orangered;
}
.forMobile {
  display: none;
}
@media screen and (max-width: 768px) {
  .forMobile {
    display: inline-flex;
  }
}
</style>
