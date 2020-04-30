<template>
  <b-list-group>
    <b-list-group-item variant="danger">後台管理</b-list-group-item>
    <router-link
      v-for="option in AdminMenu"
      :key="'x'+option.id"
      :to="{ name: `${option.router}` }"
    >
      <b-list-group-item class="word">{{ option.name }}</b-list-group-item>
    </router-link>
  </b-list-group>
</template>
<script>
const Menu = {
  AdminMenu: [
    { id: "1", name: "新增商品", router: "AdminCreateProduct" },
    { id: "2", name: "新增活動", router: "AdminCreateActivity" },
    { id: "6", name: "新增飼料、罐頭", router: "AdminCreateFeed" },
    { id: "3", name: "庫存、銷售、修改商品資訊", router: "AdminGetStore" },
    { id: "4", name: "查看訂單", router: "AdminGetOrder" },
    { id: "5", name: "會員管理", router: "AdminGetUser" }
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

<style scoped>
.word {
  color: #4d4d4d;
}
</style>
