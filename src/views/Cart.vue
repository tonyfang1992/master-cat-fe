<template>
  <div class="inner row">
    <div class="col-2 mt-5"></div>
    <div class="col-8 mt-5 row">
      <div class="col-12">
        <carousel
          :autoplay="true"
          :minSwipeDistance="40"
          :scrollPerPage="true"
          :speed="500"
          :perPage="1"
          :paginationPadding="10"
          :paginationSize="10"
          :loop="true"
        >
          <slide>
            <img src="@/assets/activity-1.png" width="100%" height="400px" />
          </slide>
          <slide>
            <img src="@/assets/activity-2.png" width="100%" height="400px" />
          </slide>
          <slide>
            <img src="@/assets/activity-3.png" width="100%" height="400px" />
          </slide>
        </carousel>
      </div>
      <div class="col-12 shadow p-3 mb-5 mx-0 bg-white rounded row">
        <div class="col-3">免運資格</div>
        <div class="col-6"></div>
        <div class="col-3">已達免運標準，現省80$</div>
      </div>
      <div class="col-12">確認訂單</div>
      <div class="col-12 row mt-3" v-for="product in products" :key="product.id">
        <div class="col-3">
          <img src="https://via.placeholder.com/150" />
        </div>
        <div class="col-6">
          <h3>{{product.name}}</h3>
          <h4>{{product.description}}</h4>
          <h5>{{product.activity}}</h5>
        </div>
        <div class="col-3">
          <div class="col-12 inline">
            <font-awesome-icon icon="dollar-sign" size="2x" />
            {{product.price}}
          </div>
          <div class="col-12">
            <div class="input-group">
              數量 :
              <button
                type="button"
                class="btn btn-link pr-0 pt-0 mt-0"
                @click="MinusProduct(product.id)"
              >
                <font-awesome-icon :icon="['far','minus-square']" style="color:black" size="2x" />
              </button>
              {{product.count}}
              <button
                type="button"
                class="btn btn-link pl-0 pt-0 mt-0"
                @click="PlusProduct(product.id)"
              >
                <font-awesome-icon :icon="['far','plus-square']" style="color:black" size="2x" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-2 mt-5"></div>
  </div>
</template>
<script>
const dummyData = {
  products: [
    {
      id: "321344",
      name: "AB綜合喵皇飼料",
      description: "SUBZERO 頂級無穀貓凍乾 火雞肉 300克 (貓飼料)",
      specification:
        "成分：野生木天蓼棒、有機貓薄荷、安全柔軟高強度釣魚線尺寸：直徑約 8CM",
      img: "https://via.placeholder.com/400x500",
      discount: 75,
      activity: "貪吃橘貓祭",
      price: 1922,
      count: 1
    },
    {
      id: "19123",
      name: "BC綜合喵皇飼料",
      description: "SUBZERO 頂級無穀貓凍乾 雞肉 800克 (貓飼料)",
      specification:
        "成分：野生木天蓼棒、有機貓薄荷、安全柔軟高強度釣魚線尺寸：直徑約 8CM",
      img: "https://via.placeholder.com/400x500",
      discount: 75,
      activity: "貪吃橘貓祭",
      price: 1922,
      count: 1
    }
  ]
};
import { Carousel, Slide } from "vue-carousel";
export default {
  components: { Carousel, Slide },
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchCart();
  },
  methods: {
    fetchCart() {
      this.products = dummyData.products;
    },
    MinusProduct(id) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id !== id) {
          return;
        }
        if (this.products[i].count > 1) {
          this.products[i].count -= 1;
        }
      }
    },
    PlusProduct(id) {
      console.log(id);
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id !== id) {
          console.log(i);
          return;
        }
        if (this.products[i].count < 9) {
          this.products[i].count += 1;
        }
      }
    }
  }
};
</script>