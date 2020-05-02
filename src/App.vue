<template>
  <div id="master-cat">
    <Navbar />
    <main role="main" class="main mt-5 bg-white">
      <router-view />
    </main>
    <Footer class="footer" />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>
<style scoped>
.footer {
  display: none;
}
@media screen and (max-width: 768px) {
  .main {
    padding-top: 20px;
    padding-bottom: 70px;
  }
  .footer {
    position: fixed;
    bottom: 0%;
    display: inline-flex;
    background-color: #f5b7b1;
    height: 60px;
  }
}
</style>
