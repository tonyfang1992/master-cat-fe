<template>
  <ul>
    <li>本周主打</li>
    <li
      v-for="ThisWeekActivity in ThisWeekActivities"
      :key="'A' + ThisWeekActivity.id"
    >
      {{ ThisWeekActivity.name }}
    </li>
    <li>新品推薦</li>
    <li v-for="NewActivity in NewActivities" :key="'B' + NewActivity.id">
      {{ NewActivity.name }}
    </li>
    <li>喵大饗宴</li>
    <li v-for="feedCategory in feedCategories" :key="feedCategory.id">
      {{ feedCategory.name }}
    </li>
    <li>清潔/衛生用品</li>
    <li v-for="cleanCategory in cleanCategories" :key="cleanCategory.id">
      {{ cleanCategory.name }}
    </li>
    <li>喵殿用品</li>
    <li v-for="otherCategory in otherCategories" :key="otherCategory.id">
      {{ otherCategory.name }}
    </li>
  </ul>
</template>
<script>
import activitiesAPI from "../apis/activities";
import { Toast } from "../utils/helpers";
const dummyData = {
  feedCategories: [
    { id: "221", name: "喵喵飼料 (品牌)" },
    { id: "22", name: "喵喵飼料 (年齡品種)" },
    { id: "23", name: "喵喵飼料 (依功能性)" },
    { id: "24", name: "喵喵罐頭 (品牌)" },
    { id: "25", name: "喵喵主 / 副食罐" },
    { id: "26", name: "肉泥 / 化毛膏" },
    { id: "27", name: "副食 / 餐包 / 餐盒" },
    { id: "28", name: "貓草 / 薄荷 / 木天蓼" },
    { id: "29", name: "魚乾 / 魚條 / 肉鬆" },
  ],
  cleanCategories: [
    { id: "331", name: "貓砂 / 貓砂盆 / 尿布墊" },
    { id: "32", name: "洗沐 / 美容 / 清潔修剪" },
    { id: "33", name: "環境清潔 / 消臭 / 驅蟲" },
  ],
  otherCategories: [
    { id: "111", name: "汪喵保健食品" },
    { id: "112", name: "貓抓板 / 紙屋 / 跳台" },
    { id: "113", name: "餐桌 / 餐碗 / 飲水機" },
    { id: "114", name: "逗貓棒 / 貓草玩具" },
    { id: "511", name: "啃咬 /拉扯 / 陪伴玩具" },
    { id: "1112", name: "外出箱包 / 胸背 / 牽繩 / 水壺" },
  ],
};
export default {
  data() {
    return {
      ThisWeekActivities: [],
      NewActivities: [],
      feedCategories: [],
      cleanCategories: [],
      otherCategories: [],
    };
  },
  created() {
    this.fetchMenu();
  },
  methods: {
    async fetchMenu() {
      try {
        const { data, statusText } = await activitiesAPI.activities.getMenu();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.ThisWeekActivities = data.ThisWeekActivities;
        this.NewActivities = data.NewActivities;
        this.feedCategories = dummyData.feedCategories;
        this.cleanCategories = dummyData.cleanCategories;
        this.otherCategories = dummyData.otherCategories;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得分類列表，請稍後再試",
        });
      }
    },
  },
};
</script>
