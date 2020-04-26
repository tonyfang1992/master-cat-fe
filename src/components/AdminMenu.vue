<template>
  <ul>
    <li>喵殿用品</li>
    <router-link
      v-for="option in AdminMenu"
      :key="'x'+option.id"
      :to="{ name: `${option.router}` }"
    >
      <li>{{ option.name }}</li>
    </router-link>
  </ul>
</template>
<script>
const Menu = {
  AdminMenu: [
    { id: "1", name: "新增商品", router: "AdminCreateProduct" },
    { id: "2", name: "新增活動、分類", router: "AdminCreateProduct" },
    { id: "3", name: "庫存、銷售", router: "AdminCreateProduct" },
    { id: "4", name: "查看訂單", router: "AdminCreateProduct" },
    { id: "5", name: "會員管理", router: "AdminCreateProduct" }
  ]
};
export default {
  data() {
    return {
      AdminMenu: []
    };
  },
  created() {
    this.fetchMenu();
  },
  methods: {
    fetchMenu() {
      this.AdminMenu = Menu.AdminMenu;
    }
  }
};
</script>
