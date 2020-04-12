<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light" style="background-color: #e3f2fd;">
    <router-link class="navbar-brand" to="/">Master cat</router-link>

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
        <router-link to="#" class="text-dark mr-3">
          <i class="pv3 ph2 ma0 link grow">
            <font-awesome-icon icon="user-secret" class="icon alt" size="2x" />
          </i>
        </router-link>

        <!-- is user is login -->

        <router-link to="#" class="text-dark mr-3">
          <i class="pv3 ph2 ma0 link grow">
            <font-awesome-icon icon="user" size="2x" />
          </i>
        </router-link>
        <router-link to="#" class="text-dark mr-3">
          <i class="pv3 ph2 ma0 link grow">
            <font-awesome-icon icon="shopping-cart" size="2x" />
          </i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>