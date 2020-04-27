<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light" style="background-color: #F5B7B1;">
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
        <router-link to="#" class="text-dark mr-3">
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
        <button type="button" class="btn btn-link pl-0 pt-0 mt-0">
          <i class="pv3 ph2 ma0 link grow" @click="goOrder(currentUser.id)">
            <font-awesome-icon icon="clipboard-list" style="color:black" size="2x" />
          </i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import cartAPI from "../apis/cart";
import { Toast } from "../utils/helpers";
export default {
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
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
