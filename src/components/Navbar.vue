<template>
  <div class="div">
    <nav
      class="forComputer navbar navbar-expand-lg fixed-top navbar-light"
      style="background-color: #F5B7B1;"
    >
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/mastercat.png" width="100px" height="40px" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbarSupportedContent" class="navbar-collapse collapse">
        <div class="ml-auto d-flex align-items-center">
          <b-button id="suggest" v-b-toggle.sidebar-1 class="mr-2" @click="getCat()">
            <font-awesome-icon icon="paw" size="2x" />
          </b-button>
          <b-sidebar id="sidebar-1" title="貓老大伙食建議" shadow>
            <div v-if="hasCat" class="px-3 py-2">
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
          <router-link :to="{name:'search'}" class="text-dark mr-3">
            <i class="pv3 ph2 ma0 link grow">
              <font-awesome-icon icon="search" size="2x" />
            </i>
          </router-link>
          <!-- is user is admin -->
          <router-link
            v-if="currentUser.role == 'admin'"
            :to="{name:'AdminCreateProduct'}"
            class="text-dark mr-3"
          >
            <i class="pv3 ph2 ma0 link grow">
              <font-awesome-icon icon="user-secret" class="icon alt" size="2x" />
            </i>
          </router-link>

          <!-- is user is login -->
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
          <router-link :to="{name:'cart'}" class="text-dark mr-3">
            <i class="pv3 ph2 ma0 link grow">
              <font-awesome-icon icon="shopping-cart" size="2x" />
            </i>
          </router-link>
          <router-link
            v-if="currentUser.role !== 'admin' && currentUser.role !== 'customer'"
            to="/signin"
            class="text-dark mr-3"
          >
            <i class="pv3 ph2 ma0 link grow">
              <font-awesome-icon icon="clipboard-list" style="color:black" size="2x" />
            </i>
          </router-link>
          <button v-else type="button" class="btn btn-link pl-0 pt-0 mt-0">
            <i class="pv3 ph2 ma0 link grow" @click="goOrder(currentUser.id)">
              <font-awesome-icon icon="clipboard-list" style="color:black" size="2x" />
            </i>
          </button>
        </div>
      </div>
    </nav>
    <nav
      class="forMobile navbar navbar-expand-lg fixed-top navbar-light"
      style="background-color: #F5B7B1;"
    >
      <div class="col-3">
        <b-button id="suggest" v-b-toggle.sidebar-2 class="mr-2">
          <font-awesome-icon icon="bars" size="2x" />
        </b-button>
        <b-sidebar id="sidebar-2" shadow>
          <Menu />
        </b-sidebar>
      </div>
      <div class="col-6 text-center">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/mastercat.png" width="100px" height="40px" />
        </router-link>
      </div>

      <div class="col-3"></div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
import cartAPI from "../apis/cart";
import catAPI from "../apis/cat";
import Menu from "../components/Menu";
import { Toast } from "../utils/helpers";
export default {
  components: {
    Menu
  },
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
