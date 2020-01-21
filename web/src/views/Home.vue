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
        <div class="pt-4 d-flex fs-lg" v-for="(item, index) in category.newsList" :key="index">
          <span>[{{item.categoryName}}]</span>
          <span class="mx-1">|</span>
          <span class="flex-1">{{item.title}}</span>
          <span>{{item.date}}</span>
        </div>
      </template>
    </m-card-list>
    <m-card title="英雄列表" icon="icon-card-hero"></m-card>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
  </div>
</template>

<script>
export default {
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
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: "公告",
            title: "1月21日全服不停机更新公告",
            date: "01/02"
          }))
        },
        {
          name: "热门1",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: "公告1",
            title: "1月21日全服不停机更新公告",
            date: "01/02"
          }))
        },
        {
          name: "热门2",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: "公告2",
            title: "1月21日全服不停机更新公告",
            date: "01/02"
          }))
        },
        {
          name: "热门3",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: "公告3",
            title: "1月21日全服不停机更新公告",
            date: "01/02"
          }))
        },
        {
          name: "热门4",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: "公告4",
            title: "1月21日全服不停机更新公告",
            date: "01/02"
          }))
        }
      ]
    };
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