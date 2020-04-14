<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="col-3 mt-5">
      <Menu />
    </div>
    <div class="col-7 mt-5">
      <div class="col-12">
        <router-link to="/cats" class="mr-5">
          <span>首頁</span>
        </router-link>
        <span>/</span>
        <span>{{category.name}}</span>
      </div>
      <div class="col-12 mt-3 mb-5">
        <span>{{category.description}}</span>
      </div>
      <TopSales :TopProducts="CategoryTopProducts" :NewProducts="CategoryNewProducts" />
      <TopSales :TopProducts="TopProducts" :NewProducts="NewProducts" />
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
const dummyData = {
  category: {
    name: "喵大飼料全館特惠中!",
    description:
      "防御工事Hu'ruru 寵物清潔保養，天然無塵礦砂，除臭礦型豆腐砂，活性碳強效除臭/低粉塵，貓主子如廁好自在！除毛磚、除臭噴霧新上市"
  },
  TopProducts: [
    {
      id: "331",
      img: "https://via.placeholder.com/150",
      price: 339,
      name: "AB罐罐"
    },
    {
      id: "332",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "低價ABC零食"
    },
    {
      id: "333",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "ABC零食"
    },
    {
      id: "334",
      img: "https://via.placeholder.com/150",
      price: 29,
      name: "低價ABC零食"
    },
    {
      id: "335",
      img: "https://via.placeholder.com/150",
      price: 100,
      name: "挑食秘方罐"
    },
    {
      id: "336",
      img: "https://via.placeholder.com/150",
      price: 421,
      name: "潔牙骨"
    },
    {
      id: "337",
      img: "https://via.placeholder.com/150",
      price: 234,
      name: "低價ABC飼料"
    },
    {
      id: "338",
      img: "https://via.placeholder.com/150",
      price: 566,
      name: "飲水台"
    },
    {
      id: "339",
      img: "https://via.placeholder.com/150",
      price: 222,
      name: "玩具B"
    },
    {
      id: "3310",
      img: "https://via.placeholder.com/150",
      price: 666,
      name: "喵大零食"
    },
    {
      id: "3311",
      img: "https://via.placeholder.com/150",
      price: 423,
      name: "健康零食"
    },
    {
      id: "3312",
      img: "https://via.placeholder.com/150",
      price: 1000,
      name: "玩具A"
    },
    {
      id: "3313",
      img: "https://via.placeholder.com/150",
      price: 532,
      name: "無敵零食"
    },
    {
      id: "3314",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "9527零食"
    },
    {
      id: "3315",
      img: "https://via.placeholder.com/150",
      price: 120,
      name: "貓窩"
    },
    {
      id: "33161",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "貓跳台"
    }
  ],
  NewProducts: [
    {
      id: "3316",
      img: "https://via.placeholder.com/150",
      price: 339,
      name: "nAB罐罐"
    },
    {
      id: "3326",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "n低價ABC零食"
    },
    {
      id: "3336",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "nABC零食"
    },
    {
      id: "3346",
      img: "https://via.placeholder.com/150",
      price: 29,
      name: "n低價ABC零食"
    },
    {
      id: "3356",
      img: "https://via.placeholder.com/150",
      price: 100,
      name: "n挑食秘方罐"
    },
    {
      id: "3366",
      img: "https://via.placeholder.com/150",
      price: 421,
      name: "n潔牙骨"
    },
    {
      id: "3376",
      img: "https://via.placeholder.com/150",
      price: 234,
      name: "n低價ABC飼料"
    },
    {
      id: "3386",
      img: "https://via.placeholder.com/150",
      price: 566,
      name: "n飲水台"
    },
    {
      id: "3396",
      img: "https://via.placeholder.com/150",
      price: 222,
      name: "n玩具B"
    },
    {
      id: "33106",
      img: "https://via.placeholder.com/150",
      price: 666,
      name: "n喵大零食"
    },
    {
      id: "33116",
      img: "https://via.placeholder.com/150",
      price: 423,
      name: "n健康零食"
    },
    {
      id: "33126",
      img: "https://via.placeholder.com/150",
      price: 1000,
      name: "n玩具A"
    },
    {
      id: "33136",
      img: "https://via.placeholder.com/150",
      price: 532,
      name: "n無敵零食"
    },
    {
      id: "33146",
      img: "https://via.placeholder.com/150",
      price: 123,
      name: "n9527零食"
    },
    {
      id: "33156",
      img: "https://via.placeholder.com/150",
      price: 120,
      name: "n貓窩"
    },
    {
      id: "33166",
      img: "https://via.placeholder.com/150",
      price: 777,
      name: "n貓跳台"
    }
  ],
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
import TopSales from "../components/TopSales";
export default {
  components: {
    Menu,
    TopSales
  },
  data() {
    return {
      TopProducts: [],
      NewProducts: [],
      CategoryTopProducts: [],
      CategoryNewProducts: [],
      category: {}
    };
  },
  created() {
    this.fetchCategory();
  },
  methods: {
    fetchCategory() {
      this.TopProducts = dummyData.TopProducts;
      this.NewProducts = dummyData.NewProducts;
      this.CategoryTopProducts = dummyData.CategoryTopProducts;
      this.CategoryNewProducts = dummyData.CategoryNewProducts;
      this.category = dummyData.category;
    }
  }
};
</script>