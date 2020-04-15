<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="col-3 mt-5">
      <Menu />
    </div>
    <div class="col-7 row mt-5">
      <div class="col-6">
        <div class="col-12 row mx-0" style="background-color:pink; height:250px;">
          <div class="col-6 row align-items-center">
            <h3>hi, {{user.name}}</h3>
            <h3>{{user.identity}}</h3>
          </div>
          <div class="col-6 row align-items-center">
            <h3>$ {{user.spendMoney}}</h3>
            <h3>累積消費</h3>
          </div>
        </div>
        <div class="col-12">
          <b-list-group>
            <router-link to="#">
              <b-list-group-item>帳戶資料</b-list-group-item>
            </router-link>
            <router-link to="#">
              <b-list-group-item>查詢訂單</b-list-group-item>
            </router-link>
            <router-link to="#">
              <b-list-group-item>常用地址</b-list-group-item>
            </router-link>
            <router-link to="#">
              <b-list-group-item>登出</b-list-group-item>
            </router-link>
          </b-list-group>
        </div>
      </div>
      <div class="col-6">
        <div class="col-12 row align-items-center border border-dark">
          <div class="col-6 my-3">
            <h3>喵老大</h3>
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
          <button class="mr-3">登錄</button>
          <button>修改</button>
        </div>
      </div>
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
const dummyData = {
  user: {
    id: "213",
    name: "王曉明",
    spendMoney: "1922",
    identity: "白銀會員"
  }
};
import Menu from "../components/Menu";
export default {
  components: {
    Menu
  },
  data() {
    return {
      user: [],
      selected1: null,
      gender: [
        { text: "男", value: "man" },
        { text: "女", value: "girl" }
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
      ]
    };
  },
  created() {
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      this.user = dummyData.user;
    }
  }
};
</script>