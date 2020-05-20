<template>
  <div class="inner row">
    <div class="col-1"></div>
    <div class="col-10 mt-5">
      <h1>活動列表</h1>
      <hr />
    </div>
    <div class="col-1"></div>
    <div class="col-1 mt-5"></div>
    <div class="col-3 mt-5">
      <AdminMenu />
    </div>
    <div class="col-7 row mt-5">
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
          <template v-slot:cell(修改活動)="row">
            <router-link :to="{name:'AdminEditThisWeekActivity', params:{id:row.item.id}}">
              <b-button size="sm" class="mr-2">修改活動</b-button>
            </router-link>
          </template>
        </b-table>
        <div>
          <b-table
            v-show="!isLoading"
            :items="items1"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :hover="hover"
            :dark="dark"
            sort-icon-left
            responsive="sm"
          >
            <template v-slot:cell(修改活動)="row">
              <router-link :to="{name:'AdminEditNewActivity', params:{id:row.item.id}}">
                <b-button size="sm" class="mr-2">修改活動</b-button>
              </router-link>
            </template>
          </b-table>
        </div>
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
        { key: "修改活動", sortable: false }
      ],
      items: [],
      items1: [],
      hover: true,
      dark: false,
      isLoading: true
    };
  },
  created() {
    this.fetchActivity();
  },
  methods: {
    async fetchActivity() {
      try {
        const { data, statusText } = await adminAPI.getActivity();
        console.log(data);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.items = data.activities[0];
        this.items1 = data.activities[1];

        this.isLoading = false;
      } catch {
        Toast.fire({
          icon: "error",
          title: "目前無法取得庫存資料，請稍後再試"
        });
      }
    }
  }
};
</script>
