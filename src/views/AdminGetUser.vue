<template>
  <div class="inner row">
    <div class="col-1"></div>
    <div class="col-10 mt-5">
      <h1>新增活動</h1>
      <hr />
    </div>
    <div class="col-1"></div>
    <div class="col-1 mt-5"></div>
    <div class="col-3 mt-5">
      <AdminMenu />
    </div>
    <div v-if="this.items.length == 0" class="col-7 row mt-5">
      <h3>目前沒有會員!</h3>
    </div>
    <div v-else class="col-7 row mt-5">
      <div>
        <b-table
          v-show="!isLoading"
          :items="items"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :hover="hover"
          :dark="dark"
          sort-icon-left
          responsive="sm"
        >
          <template v-slot:cell(註銷使用者)="row">
            <b-button size="sm" class="mr-2" @click="DeleteUser(row.item.id)">註銷使用者</b-button>
          </template>
        </b-table>
      </div>
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
import AdminMenu from "../components/AdminMenu";
import { Toast } from "../utils/helpers";
import adminAPI from "../apis/admin";
export default {
  components: {
    AdminMenu
  },
  data() {
    return {
      sortBy: "id",
      sortDesc: false,
      fields: [
        { key: "id", sortable: true },
        { key: "name", sortable: true },
        { key: "email", sortable: true },
        { key: "role", sortable: true },
        { key: "rank", sortable: true },
        { key: "spendMoney", sortable: true },
        { key: "註銷使用者", sortable: false }
      ],
      items: [],
      hover: true,
      dark: false,
      isLoading: true
    };
  },
  created() {
    this.fetchGetUser();
  },
  methods: {
    async fetchGetUser() {
      try {
        const { data, statusText } = await adminAPI.getUser();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.items = data.users;

        this.isLoading = false;
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法取得庫存資料，請稍後再試"
        });
      }
    },
    async DeleteUser(id) {
      try {
        const { data } = await adminAPI.deleteUser(id);
        if (data.status !== "success") {
          throw new Error(status);
        }
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].id == id) {
            this.items = this.items.filter(item => item.id !== id);
          }
        }
        Toast.fire({
          icon: "success",
          title: "成功註銷使用者!"
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "註銷使用者失敗，請稍後再試"
        });
      }
    }
  }
};
</script>
