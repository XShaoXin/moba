<template>
  <div>
    <!-- 轮播图start -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/41eeba8d8279d79241a7c9e7b5d57b0b.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/92b37fe4ca9c32bfc961b1f0daa780a6.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/f33c0fc57920840fb7be498bd7fbc484.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home pr-3 py-2" slot="pagination"></div>
    </swiper>
    <!-- 轮播图end -->

    <!-- 九宫格start -->
    <div class="nav-icons mt-3 bg-white text-dark text-center">
      <div class="d-flex flex-wrap">
        <div class="nav-item my-3" v-for="(item, index) in 13" :key="index">
          <i class="sprite sprite-news"></i>
          <div class="py-1">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex jc-center ai-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- 九宫格end -->

    <!-- 卡片start -->
    <m-card-list title="新闻资讯" icon="icon-caidan1" :categories="newsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/article/${item._id}`"
          class="pt-4 d-flex fs-lg"
          v-for="(item, index) in category.newsList"
          :key="index"
        >
          <span class="text-info">[{{item.categoryName}}]</span>
          <span class="mx-1">|</span>
          <span class="flex-1 text-ellipsis">{{item.title}}</span>
          <span class="text-grey fx-xs">{{item.createdAt | date}}</span>
        </router-link>
      </template>
    </m-card-list>
    <m-card-list title="英雄列表" icon="icon-card-hero" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link
            tag="div"
            :to="`/hero/${hero._id}`"
            v-for="(hero, index) in category.heroList"
            :key="index"
            class="p-2 text-center"
            style="width:20%;"
          >
            <img :src="hero.avatar" alt class="w-100" />
            <span class="fs-sm">{{hero.name}}</span>
          </router-link>
        </div>
      </template>
    </m-card-list>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        },
        autoplay: {
          delay: 1500
        }
      },
      newsCats: [],
      heroCats: []
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("/news/list");
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("/Heroes/list");
      this.heroCats = res.data;
    }
  },
  created() {
    this.fetchNewsCats(), this.fetchHeroCats();
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  text-align: right;
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.125rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>