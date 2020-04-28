<template>
  <b-list-group>
    <b-list-group-item variant="danger">本周主打</b-list-group-item>
    <router-link
      v-for="ThisWeekActivity in ThisWeekActivities"
      :key="'A' + ThisWeekActivity.id"
      :to="{ name: 'thisweekactivity', params: { id: ThisWeekActivity.id } }"
    >
      <b-list-group-item class="word">{{ ThisWeekActivity.name }}</b-list-group-item>
    </router-link>

    <b-list-group-item variant="danger">新品推薦</b-list-group-item>
    <router-link
      v-for="NewActivity in NewActivities"
      :key="'B' + NewActivity.id"
      :to="{ name: 'newactivity', params: { id: NewActivity.id } }"
    >
      <b-list-group-item class="word">{{ NewActivity.name }}</b-list-group-item>
    </router-link>

    <b-list-group-item variant="danger">喵大饗宴</b-list-group-item>
    <b-list-group-item v-b-toggle.collapse-a href="#">
      喵喵飼料 (品牌)
      <font-awesome-icon icon="caret-down" style="color:black" size="2x" />
    </b-list-group-item>
    <b-collapse id="collapse-a" class="mt-2">
      <router-link
        v-for="Feed in Feeds"
        :key="'g'+Feed.id"
        :to="{ name: 'feed', params: { id: Feed.id } }"
      >
        <b-list-group-item class="word">{{ Feed.brand }}</b-list-group-item>
      </router-link>
    </b-collapse>
    <b-list-group-item v-b-toggle.collapse-b href="#">
      喵喵飼料 (年齡品種)
      <font-awesome-icon icon="caret-down" style="color:black" size="2x" />
    </b-list-group-item>
    <b-collapse id="collapse-b" class="mt-2">
      <router-link
        v-for="FeedAge in FeedAges"
        :key="'h'+FeedAge.id"
        :to="{ name: 'feedage', params: { id: FeedAge.id } }"
      >
        <b-list-group-item class="word">{{ FeedAge.age }}</b-list-group-item>
      </router-link>
    </b-collapse>
    <b-list-group-item v-b-toggle.collapse-c href="#">
      喵喵飼料 (依功能性)
      <font-awesome-icon icon="caret-down" style="color:black" size="2x" />
    </b-list-group-item>
    <b-collapse id="collapse-c" class="mt-2">
      <router-link
        v-for="FeedFunction in FeedFunctions"
        :key="'i'+FeedFunction.id"
        :to="{ name: 'subcategory', params: { id: FeedFunction.id } }"
      >
        <b-list-group-item class="word">{{ FeedFunction.function }}</b-list-group-item>
      </router-link>
    </b-collapse>
    <b-list-group-item v-b-toggle.collapse-d href="#">
      喵喵罐頭 (品牌)
      <font-awesome-icon icon="caret-down" style="color:black" size="2x" />
    </b-list-group-item>
    <b-collapse id="collapse-d" class="mt-2">
      <router-link
        v-for="Can in Cans"
        :key="'j'+Can.id"
        :to="{ name: 'subcategory', params: { id: Can.id } }"
      >
        <b-list-group-item class="word">{{ Can.brand }}</b-list-group-item>
      </router-link>
    </b-collapse>
    <b-list-group-item v-b-toggle.collapse-e href="#">
      喵喵主 / 副食罐
      <font-awesome-icon icon="caret-down" style="color:black" size="2x" />
    </b-list-group-item>
    <b-collapse id="collapse-e" class="mt-2">
      <router-link
        v-for="CanType in CanTypes"
        :key="'j'+CanType.id"
        :to="{ name: 'subcategory', params: { id: CanType.id } }"
      >
        <b-list-group-item class="word">{{ CanType.type }}</b-list-group-item>
      </router-link>
    </b-collapse>
    <router-link
      v-for="feedCategory in feedCategories"
      :key="'C'+feedCategory.id"
      :to="{ name: 'subcategory', params: { id: feedCategory.id } }"
    >
      <b-list-group-item class="word">{{ feedCategory.name }}</b-list-group-item>
    </router-link>

    <b-list-group-item variant="danger">清潔/衛生用品</b-list-group-item>
    <router-link
      v-for="cleanCategory in cleanCategories"
      :key="'d'+cleanCategory.id"
      :to="{ name: 'subcategory', params: { id: cleanCategory.id } }"
    >
      <b-list-group-item class="word">{{ cleanCategory.name }}</b-list-group-item>
    </router-link>

    <b-list-group-item variant="danger">喵殿用品</b-list-group-item>
    <router-link
      v-for="otherCategory in otherCategories"
      :key="'e'+otherCategory.id"
      :to="{ name: 'subcategory', params: { id: otherCategory.id } }"
    >
      <b-list-group-item class="word">{{ otherCategory.name }}</b-list-group-item>
    </router-link>
  </b-list-group>
</template>
<script>
import activitiesAPI from "../apis/activities";
import { Toast } from "../utils/helpers";
const dummyData = {
  feedCategories: [
    { id: "1", name: "肉泥 / 化毛膏" },
    { id: "27", name: "副食 / 餐包 / 餐盒" },
    { id: "2", name: "貓草 / 薄荷 / 木天蓼" },
    { id: "3", name: "魚乾 / 魚條 / 肉鬆" }
  ],
  cleanCategories: [
    { id: "4", name: "貓砂 / 貓砂盆 / 尿布墊" },
    { id: "5", name: "洗沐 / 美容 / 清潔修剪" },
    { id: "6", name: "環境清潔 / 消臭 / 驅蟲" }
  ],
  otherCategories: [
    { id: "8", name: "汪喵保健食品" },
    { id: "9", name: "貓抓板 / 紙屋 / 跳台" },
    { id: "10", name: "餐桌 / 餐碗 / 飲水機" },
    { id: "11", name: "逗貓棒 / 貓草玩具" },
    { id: "12", name: "啃咬 /拉扯 / 陪伴玩具" },
    { id: "13", name: "外出箱包 / 胸背 / 牽繩 / 水壺" }
  ]
};
export default {
  data() {
    return {
      Cans: [],
      CanTypes: [],
      Feeds: [],
      FeedAges: [],
      FeedFunctions: [],
      ThisWeekActivities: [],
      NewActivities: [],
      feedCategories: [],
      cleanCategories: [],
      otherCategories: []
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
        console.log(data);
        this.Cans = data.Cans;
        this.CanTypes = data.CanTypes;
        this.Feeds = data.Feeds;
        this.FeedAges = data.FeedAges;
        this.FeedFunctions = data.FeedFunctions;
        this.ThisWeekActivities = data.ThisWeekActivities;
        this.NewActivities = data.NewActivities;
        this.feedCategories = dummyData.feedCategories;
        this.cleanCategories = dummyData.cleanCategories;
        this.otherCategories = dummyData.otherCategories;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得分類列表，請稍後再試"
        });
      }
    }
  }
};
</script>
<style scoped>
.word {
  color: #4d4d4d;
}
.active {
  color: #4d4d4d;
  background: burlywood;
}
</style>
