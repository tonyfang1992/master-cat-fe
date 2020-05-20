<template>
  <div class="inner row">
    <div class="col-1"></div>
    <div class="col-10 mt-5">
      <h1>訂單列表</h1>
      <hr />
    </div>
    <div class="col-1"></div>
    <div class="col-1 mt-5"></div>
    <div class="col-3 mt-5">
      <AdminMenu />
    </div>
    <div v-if="this.items.length == 0" class="col-7 row mt-5">
      <h3>目前沒有訂單!</h3>
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
          <template v-slot:cell(刪除訂單)="row">
            <b-button size="sm" class="mr-2" @click="DeleteOrder(row.item.id)">刪除訂單</b-button>
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
        { key: "UserId", sortable: true },
        { key: "payment_status", sortable: true },
        { key: "amount", sortable: true },
        { key: "刪除訂單", sortable: false }
      ],
      items: [],
      hover: true,
      dark: false,
      isLoading: true
    };
  },
  created() {
    this.fetchGetOrder();
  },
  methods: {
    async fetchGetOrder() {
      try {
        const { data, statusText } = await adminAPI.getOrder();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.items = data.orders;

        this.isLoading = false;
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法取得庫存資料，請稍後再試"
        });
      }
    },
    async DeleteOrder(id) {
      try {
        const { data } = await adminAPI.deleteOrder(id);
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
          title: "成功刪除訂單!"
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "刪除訂單失敗，請稍後再試"
        });
      }
    }
  }
};
</script>
