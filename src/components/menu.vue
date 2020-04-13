<template>
  <ul>
    <li>本周主打</li>
    <li v-for="activity in activities" :key="activity.id">{{activity.name}}</li>
    <li>新品推薦</li>
    <li v-for="newActivity in newActivities" :key="newActivity.id">{{newActivity.name}}</li>
    <li>喵大饗宴</li>
    <li v-for="feedCategory in feedCategories" :key="feedCategory.id">{{feedCategory.name}}</li>
    <li>清潔/衛生用品</li>
    <li v-for="cleanCategory in cleanCategories" :key="cleanCategory.id">{{cleanCategory.name}}</li>
    <li>喵殿用品</li>
    <li v-for="otherCategory in otherCategories" :key="otherCategory.id">{{otherCategory.name}}</li>
  </ul>
</template>
<script>
const dummyData = {
  activities: [
    { id: "1", name: "4月零食盒 12件$499元!" },
    { id: "2", name: "換季除毛 全區$49起!" },
    { id: "3", name: "【爆毛罐罐】Peko整箱$599" },
    { id: "4", name: "【安娜美廚】新裝上市" },
    { id: "5", name: "【希爾思】送7-11咖啡x2" },
    { id: "6", name: "【春夏涼墊】最高省千元!" },
    { id: "7", name: "【2020 WDJ】入選飼料出爐" },
    { id: "8", name: "【防疫專區】無酒精5折起!" },
    { id: "9", name: "【外出箱包】出清49折起!" }
  ],
  newActivities: [
    { id: "11", name: "毛起來 保健洗沐$139起!" },
    { id: "21", name: "防禦工事 貓砂/清潔新品" },
    { id: "31", name: "黃金盾 抗菌新品9折!" },
    { id: "41", name: "就愛酪梨 嘗鮮價$499!" },
    { id: "51", name: "春季新品 75折起!" }
  ],
  feedCategories: [
    { id: "221", name: "喵喵飼料 (品牌)" },
    { id: "22", name: "喵喵飼料 (年齡品種)" },
    { id: "23", name: "喵喵飼料 (依功能性)" },
    { id: "24", name: "喵喵罐頭 (品牌)" },
    { id: "25", name: "喵喵主 / 副食罐" },
    { id: "26", name: "肉泥 / 化毛膏" },
    { id: "27", name: "副食 / 餐包 / 餐盒" },
    { id: "28", name: "貓草 / 薄荷 / 木天蓼" },
    { id: "29", name: "魚乾 / 魚條 / 肉鬆" }
  ],
  cleanCategories: [
    { id: "331", name: "貓砂 / 貓砂盆 / 尿布墊" },
    { id: "32", name: "洗沐 / 美容 / 清潔修剪" },
    { id: "33", name: "環境清潔 / 消臭 / 驅蟲" }
  ],
  otherCategories: [
    { id: "111", name: "汪喵保健食品" },
    { id: "112", name: "貓抓板 / 紙屋 / 跳台" },
    { id: "113", name: "餐桌 / 餐碗 / 飲水機" },
    { id: "114", name: "逗貓棒 / 貓草玩具" },
    { id: "511", name: "啃咬 /拉扯 / 陪伴玩具" },
    { id: "1112", name: "外出箱包 / 胸背 / 牽繩 / 水壺" }
  ]
};
export default {
  data() {
    return {
      activities: [],
      newActivities: [],
      feedCategories: [],
      cleanCategories: [],
      otherCategories: []
    };
  },
  created() {
    this.fetchMenu();
  },
  methods: {
    fetchMenu() {
      this.activities = dummyData.activities;
      this.newActivities = dummyData.newActivities;
      this.feedCategories = dummyData.feedCategories;
      this.cleanCategories = dummyData.cleanCategories;
      this.otherCategories = dummyData.otherCategories;
    }
  }
};
</script>