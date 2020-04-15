<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="col-3 mt-5">
      <Menu />
    </div>
    <div class="col-7 mt-5">
      <div class="col-8">
        <b-input-group>
          <b-form-input v-model="search" placeholder="搜尋商品"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-secondary" @click="searchProducts">搜尋</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
      <div class="col-4"></div>
      <div class="col-12">
        <SearchTopSales :TopProducts="CategoryTopProducts" :NewProducts="CategoryNewProducts" />
      </div>
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
const dummyData = {
  CategoryTopProducts: [
    {
      id: "2331",
      img: "https://via.placeholder.com/150",
      price: 339,
      name: "分類AB罐罐"
    },
    {
      id: "2332",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "分類低價ABC零食"
    },
    {
      id: "2333",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "ABC零食"
    },
    {
      id: "2334",
      img: "https://via.placeholder.com/150",
      price: 29,
      name: "分類低價ABC零食"
    },
    {
      id: "2335",
      img: "https://via.placeholder.com/150",
      price: 100,
      name: "挑食秘方罐"
    },
    {
      id: "2336",
      img: "https://via.placeholder.com/150",
      price: 421,
      name: "潔牙骨"
    },
    {
      id: "2337",
      img: "https://via.placeholder.com/150",
      price: 234,
      name: "低價ABC飼料"
    },
    {
      id: "2338",
      img: "https://via.placeholder.com/150",
      price: 566,
      name: "飲水台"
    },
    {
      id: "22339",
      img: "https://via.placeholder.com/150",
      price: 222,
      name: "玩具B"
    },
    {
      id: "23310",
      img: "https://via.placeholder.com/150",
      price: 666,
      name: "喵大零食"
    },
    {
      id: "23311",
      img: "https://via.placeholder.com/150",
      price: 423,
      name: "健康零食"
    },
    {
      id: "23312",
      img: "https://via.placeholder.com/150",
      price: 1000,
      name: "分類玩具A"
    },
    {
      id: "23313",
      img: "https://via.placeholder.com/150",
      price: 532,
      name: "無敵零食"
    },
    {
      id: "23314",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "9527零食"
    },
    {
      id: "23315",
      img: "https://via.placeholder.com/150",
      price: 120,
      name: "貓窩"
    },
    {
      id: "233161",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "貓跳台"
    }
  ],
  CategoryNewProducts: [
    {
      id: "93316",
      img: "https://via.placeholder.com/150",
      price: 339,
      name: "nAB罐罐"
    },
    {
      id: "93326",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "n低價ABC零食"
    },
    {
      id: "39336",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "nABC零食"
    },
    {
      id: "93346",
      img: "https://via.placeholder.com/150",
      price: 29,
      name: "n低價ABC零食"
    },
    {
      id: "93356",
      img: "https://via.placeholder.com/150",
      price: 100,
      name: "n挑食秘方罐"
    },
    {
      id: "93366",
      img: "https://via.placeholder.com/150",
      price: 421,
      name: "n潔牙骨"
    },
    {
      id: "93376",
      img: "https://via.placeholder.com/150",
      price: 234,
      name: "n低價ABC飼料"
    },
    {
      id: "93386",
      img: "https://via.placeholder.com/150",
      price: 566,
      name: "n飲水台"
    },
    {
      id: "93396",
      img: "https://via.placeholder.com/150",
      price: 222,
      name: "n玩具B"
    },
    {
      id: "933106",
      img: "https://via.placeholder.com/150",
      price: 666,
      name: "n喵大零食"
    },
    {
      id: "933116",
      img: "https://via.placeholder.com/150",
      price: 423,
      name: "n健康零食"
    },
    {
      id: "933126",
      img: "https://via.placeholder.com/150",
      price: 1000,
      name: "n玩具A"
    },
    {
      id: "933136",
      img: "https://via.placeholder.com/150",
      price: 532,
      name: "n無敵零食"
    },
    {
      id: "933146",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "n9527零食"
    },
    {
      id: "933156",
      img: "https://via.placeholder.com/150",
      price: 120,
      name: "n貓窩"
    },
    {
      id: "933166",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "n貓跳台"
    }
  ]
};
import Menu from "../components/Menu";
import SearchTopSales from "../components/SearchTopSales";
export default {
  components: {
    Menu,
    SearchTopSales
  },
  data() {
    return {
      search: "",
      CategoryTopProducts: [],
      CategoryNewProducts: []
    };
  },
  methods: {
    searchProducts() {
      this.CategoryTopProducts = dummyData.CategoryTopProducts;
      this.CategoryNewProducts = dummyData.CategoryNewProducts;
    }
  }
};
</script>