<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="Menu col-3 mt-5">
      <Menu />
    </div>
    <div class="forComputer container col-7 row mt-5">
      <div class="col-6">
        <div class="col-12 row mx-0" style="background-color:pink; height:250px;">
          <div v-if="isAddress" class="col-12">
            <div>
              姓名 : {{user.name}}
              <b-form-input v-model="userName"></b-form-input>
            </div>

            <div>
              電話 : {{user.phone}}
              <b-form-input v-model="phone"></b-form-input>
            </div>
            <div>
              地址 :{{user.address}}
              <b-form-input v-model="address"></b-form-input>
            </div>
            <button class="btn btn-primary" @click="putUser()">送出修改</button>
          </div>
          <div v-else class="col-12 row">
            <div class="col-6 row align-items-center">
              <h3>hi, {{ user.name }}</h3>
              <h3>{{ user.rank }}</h3>
            </div>
            <div class="col-6 row align-items-center">
              <h3>$ {{ user.spendMoney }}</h3>
              <h3>累積消費</h3>
            </div>
          </div>
        </div>
        <div class="col-12">
          <b-list-group>
            <button class="btn btn-link" @click="showInfo()">
              <b-list-group-item>會員狀態</b-list-group-item>
            </button>
            <button class="btn btn-link" @click="goOrder(currentUser.id)">
              <b-list-group-item>查詢訂單</b-list-group-item>
            </button>
            <button class="btn btn-link" @click="showAddress()">
              <b-list-group-item>常用地址</b-list-group-item>
            </button>
            <button class="btn btn-link" @click="logOut()">
              <b-list-group-item>登出</b-list-group-item>
            </button>
          </b-list-group>
        </div>
      </div>
      <div v-if="user.Cats.length !== 0" class="col-6">
        <div class="col-12 row align-items-center border border-dark">
          <div class="col-6 my-3">
            <h3>{{ user.Cats[0].name }}</h3>
            <h3>年齡 : {{ user.Cats[0].age }}</h3>
            <h3>性別 : {{ user.Cats[0].gender }}</h3>
            <h3>體重 : {{ user.Cats[0].weight }}kg</h3>
          </div>
          <div class="col-6 my-3">
            <img src="https://via.placeholder.com/150" />
          </div>
        </div>
        <div class="col-12">
          <div>
            性別 :
            <b-form-radio-group v-model="selected1" :options="gender" name="radio-inline"></b-form-radio-group>
          </div>

          <div>
            年齡 :
            <b-form-select v-model="selected2" :options="age"></b-form-select>
          </div>
          <div>
            體重 :
            <b-form-select v-model="selected3" :options="weight"></b-form-select>
          </div>
        </div>
        <div class="mt-5 text-center">
          <button @click="putCat()">修改</button>
        </div>
      </div>
      <div v-if="user.Cats.length == 0" class="col-6">
        <div class="col-12 row align-items-center border border-dark">
          <div class="col-6 my-3">
            <b-form-input v-model="catName" placeholder="喵大名字"></b-form-input>
          </div>
          <div class="col-6 my-3">
            <img src="https://via.placeholder.com/150" />
          </div>
        </div>
        <div class="col-12">
          <div>
            性別 :
            <b-form-radio-group v-model="selected1" :options="gender" name="radio-inline"></b-form-radio-group>
          </div>

          <div>
            年齡 :
            <b-form-select v-model="selected2" :options="age"></b-form-select>
          </div>
          <div>
            體重 :
            <b-form-select v-model="selected3" :options="weight"></b-form-select>
          </div>
        </div>
        <div class="mt-5 text-center">
          <button class="mr-3" @click="postCat()">登錄</button>
        </div>
      </div>
    </div>
    <div class="forMobile container col-12 mt-5 column">
      <div class="col-12">
        <div class="col-12 row mx-0" style="background-color:pink; height:250px;">
          <div v-if="isAddress" class="col-12">
            <div>
              姓名 : {{user.name}}
              <b-form-input v-model="userName"></b-form-input>
            </div>

            <div>
              電話 : {{user.phone}}
              <b-form-input v-model="phone"></b-form-input>
            </div>
            <div>
              地址 :{{user.address}}
              <b-form-input v-model="address"></b-form-input>
            </div>
            <button class="btn btn-primary" @click="putUser()">送出修改</button>
          </div>
          <div v-else class="col-12 row">
            <div class="col-6 row align-items-center">
              <h3>hi, {{ user.name }}</h3>
              <h3>{{ user.rank }}</h3>
            </div>
            <div class="col-6 row align-items-center">
              <h3>$ {{ user.spendMoney }}</h3>
              <h3>累積消費</h3>
            </div>
          </div>
        </div>
        <div class="col-12">
          <b-list-group>
            <button class="btn btn-link" @click="showInfo()">
              <b-list-group-item>會員狀態</b-list-group-item>
            </button>
            <button class="btn btn-link" @click="goOrder(currentUser.id)">
              <b-list-group-item>查詢訂單</b-list-group-item>
            </button>
            <button class="btn btn-link" @click="showAddress()">
              <b-list-group-item>常用地址</b-list-group-item>
            </button>
            <button class="btn btn-link" @click="logOut()">
              <b-list-group-item>登出</b-list-group-item>
            </button>
          </b-list-group>
        </div>
      </div>
      <div v-if="user.Cats.length !== 0" class="col-12">
        <div class="col-12 row align-items-center border border-dark">
          <div class="col-6 my-3">
            <h3>{{ user.Cats[0].name }}</h3>
            <h3>年齡 : {{ user.Cats[0].age }}</h3>
            <h3>性別 : {{ user.Cats[0].gender }}</h3>
            <h3>體重 : {{ user.Cats[0].weight }}</h3>
          </div>
          <div class="col-6 my-3">
            <img src="https://via.placeholder.com/150" />
          </div>
        </div>
        <div class="col-12">
          <div>
            性別 :
            <b-form-radio-group v-model="selected1" :options="gender" name="radio-inline"></b-form-radio-group>
          </div>

          <div>
            年齡 :
            <b-form-select v-model="selected2" :options="age"></b-form-select>
          </div>
          <div>
            體重 :
            <b-form-select v-model="selected3" :options="weight"></b-form-select>
          </div>
        </div>
        <div class="mt-5 text-center">
          <button @click="putCat()">修改</button>
        </div>
      </div>
      <div v-if="user.Cats.length == 0" class="col-12">
        <div class="col-12 row align-items-center border border-dark">
          <div class="col-6 my-3">
            <b-form-input v-model="catName" placeholder="喵大名字"></b-form-input>
          </div>
          <div class="col-6 my-3">
            <img src="https://via.placeholder.com/150" />
          </div>
        </div>
        <div class="col-12">
          <div>
            性別 :
            <b-form-radio-group v-model="selected1" :options="gender" name="radio-inline"></b-form-radio-group>
          </div>

          <div>
            年齡 :
            <b-form-select v-model="selected2" :options="age"></b-form-select>
          </div>
          <div>
            體重 :
            <b-form-select v-model="selected3" :options="weight"></b-form-select>
          </div>
        </div>
        <div class="mt-5 text-center">
          <button class="mr-3" @click="postCat()">登錄</button>
        </div>
      </div>
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
import Menu from "../components/Menu";
import userAPI from "../apis/user";
import catAPI from "../apis/cat";
import cartAPI from "../apis/cart";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";
export default {
  components: {
    Menu
  },
  data() {
    return {
      user: [],
      userName: "",
      address: "",
      phone: "",
      catName: "",
      selected1: null,
      gender: [
        { text: "男", value: "男生" },
        { text: "女", value: "女生" }
      ],
      selected2: null,
      age: [
        { value: 1, text: "1歲" },
        { value: 2, text: "2歲" },
        { value: 3, text: "3歲" },
        { value: 4, text: "4歲" },
        { value: 5, text: "5歲" },
        { value: 6, text: "6歲" },
        { value: 7, text: "7歲" },
        { value: 8, text: "8歲" },
        { value: 9, text: "9歲" },
        { value: 10, text: "10歲" },
        { value: 11, text: "11歲" },
        { value: 12, text: "12歲" },
        { value: 13, text: "13歲" },
        { value: 14, text: "14歲" },
        { value: 15, text: "15歲" },
        { value: 16, text: "16歲" },
        { value: 17, text: "17歲" },
        { value: 18, text: "18歲" },
        { value: 19, text: "19歲" },
        { value: 20, text: "20歲" }
      ],
      selected3: null,
      weight: [
        { value: 1, text: "1kg" },
        { value: 2, text: "2kg" },
        { value: 3, text: "3kg" },
        { value: 4, text: "4kg" },
        { value: 5, text: "5kg" },
        { value: 6, text: "6kg" },
        { value: 7, text: "7kg" },
        { value: 8, text: "8kg" },
        { value: 9, text: "9kg" },
        { value: 10, text: "10kg" },
        { value: 11, text: "11kg" },
        { value: 12, text: "12kg" },
        { value: 13, text: "13kg" },
        { value: 14, text: "14kg" },
        { value: 15, text: "15kg" },
        { value: 16, text: "16kg" },
        { value: 17, text: "17kg" },
        { value: 18, text: "18kg" },
        { value: 19, text: "19kg" },
        { value: 20, text: "20kg" }
      ],
      isAddress: false
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchProfile(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchProfile(id);
    next();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    async fetchProfile(id) {
      try {
        const { data, statusText } = await userAPI.get(id);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.user = data.user;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得會員資料，請稍後再試"
        });
      }
    },
    async postCat() {
      try {
        if (
          !this.catName ||
          !this.selected1 ||
          !this.selected2 ||
          !this.selected3
        ) {
          Toast.fire({
            icon: "error",
            title: "請填入貓咪所有的資料唷!"
          });
          return;
        }
        const { data, statusText } = await catAPI.postCat({
          name: this.catName,
          gender: this.selected1,
          age: this.selected2,
          weight: this.selected3,
          UserId: this.user.id
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        Toast.fire({
          icon: "success",
          title: "成功登錄您的愛貓"
        });
        this.$router.push("/cats");
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得會員資料，請稍後再試"
        });
      }
    },
    async putCat() {
      try {
        if (!this.selected1 || !this.selected2 || !this.selected3) {
          Toast.fire({
            icon: "error",
            title: "請填入貓咪所有的資料唷!"
          });
          return;
        }
        const { data, statusText } = await catAPI.putCat({
          name: this.user.Cats[0].name,
          gender: this.selected1,
          age: this.selected2,
          weight: this.selected3,
          UserId: this.user.id,
          CatId: this.user.Cats[0].id
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        Toast.fire({
          icon: "success",
          title: "成功修改愛貓資訊"
        });
        this.$router.push("/cats");
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得會員資料，請稍後再試"
        });
      }
    },
    showInfo() {
      this.isAddress = false;
    },
    showAddress() {
      this.isAddress = true;
    },
    async putUser() {
      try {
        let phoneNumber = 0;
        phoneNumber = parseInt(this.phone);

        if (
          this.phone.length == 0 ||
          this.userName.length == 0 ||
          this.address.length == 0
        ) {
          Toast.fire({
            icon: "error",
            title: "所有欄位都是必填!"
          });
          return;
        }

        if (this.phone.length !== 10 || isNaN(phoneNumber)) {
          Toast.fire({
            icon: "error",
            title: "電話欄只能輸入長度為10的數字!"
          });
          return;
        }

        const { data, statusText } = await userAPI.put({
          name: this.userName,
          phone: this.phone,
          address: this.address
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        Toast.fire({
          icon: "success",
          title: `${data.message}`
        });
        this.$router.push("/cats");
      } catch {
        Toast.fire({
          icon: "error",
          title: "修改失敗，請稍後再試"
        });
      }
    },
    async logOut() {
      this.$store.commit("revokeAuthentication");
      Toast.fire({
        icon: "success",
        title: "成功登出!為了給您最佳的服務，建議登入會員唷。"
      });
      this.$router.push("/cats");
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
    display: contents;
  }
  .col-2 {
    display: none;
  }
  .col-1 {
    display: none;
  }
}
</style>