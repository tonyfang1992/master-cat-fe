<template>
  <div class="inner row">
    <div class="col-1 mt-5"></div>
    <div class="col-3 mt-5">
      <Menu />
    </div>
    <div class="col-7 row mt-5">
      <div class="col-6">
        <img :src="product.img" />
      </div>
      <div class="col-6">
        <div class="div">{{product.name}}</div>
        <div class="div mt-2">
          <h3>{{product.description}}</h3>
        </div>
        <div class="div mt-2">活動 : {{product.activity}}</div>
        <div class="div mt-2">折扣 : {{product.discount}} 折</div>
        <div class="div mt-2">價格 : {{product.price}} 元</div>
        <div class="div mt-2">庫存 : {{product.amount}} 件</div>
        <div class="col-12 row mt-3">
          <div class="input-group mb-3 col-6">
            數量 :
            <button type="button" class="btn btn-link pr-0 pt-0 mt-0" @click="MinusProduct">
              <font-awesome-icon :icon="['far','minus-square']" style="color:black" size="2x" />
            </button>
            {{count}}
            <button
              type="button"
              class="btn btn-link pl-0 pt-0 mt-0"
              @click="PlusProduct"
            >
              <font-awesome-icon :icon="['far','plus-square']" style="color:black" size="2x" />
            </button>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-info">加入購物車</button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <b-nav tabs justified>
          <b-nav-item>描述</b-nav-item>
          <b-nav-item>規格</b-nav-item>
          <b-nav-item>說明</b-nav-item>
        </b-nav>
        <div>---描述---</div>
        <p>{{product.detail}}</p>
        <div>---規格---</div>
        <pre>{{product.specification}}</pre>
        <div>---說明---</div>
        <pre>本商品無法限制配送條件</pre>
      </div>
      <TopSales :TopProducts="CategoryTopProducts" :NewProducts="CategoryNewProducts" />
    </div>
    <div class="col-1 mt-5"></div>
  </div>
</template>
<script>
const dummyData = {
  product: {
    id: "1992",
    name: "AB綜合喵皇飼料",
    description: "SUBZERO 頂級無穀貓凍乾 火雞肉 300克 (貓飼料)",
    detail:
      "◆精選野生木天蓼棒製成，不含任何化學成分，天然無毒可安心使精選野生木天蓼棒含有高濃度獼猴桃碱讓貓咪沉醉調節腸胃 清新口腔 磨牙潔齒 催吐球 安定血壓 遠離糖尿病 手工編織用天然麻繩緊緊將木天蓼棒編成精緻的玲瓏球造型特別，吸引貓咪注意",
    specification:
      "成分：野生木天蓼棒、有機貓薄荷、安全柔軟高強度釣魚線尺寸：直徑約 8CM",
    img: "https://via.placeholder.com/400x500",
    discount: 75,
    activity: "貪吃橘貓祭",
    amount: 24,
    price: 1922
  },
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
      product: [],
      count: 1,
      CategoryTopProducts: [],
      CategoryNewProducts: []
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      this.product = dummyData.product;
      this.CategoryTopProducts = dummyData.CategoryTopProducts;
      this.CategoryNewProducts = dummyData.CategoryNewProducts;
    },
    MinusProduct() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
    PlusProduct() {
      if (this.count < 9) {
        this.count += 1;
      }
    }
  }
};
</script>