<template>
  <div>
    <!-- 轮播图start -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <a
          href="http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&e_code=502278&idataid=296451&tid=439303"
        >
          <img class="w-100" src="../assets/images/41eeba8d8279d79241a7c9e7b5d57b0b.jpeg" alt />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href>
          <img class="w-100" src="../assets/images/92b37fe4ca9c32bfc961b1f0daa780a6.jpeg" alt />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a
          href="http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&e_code=502281&idataid=296454&tid=439356"
        >
          <img class="w-100" src="../assets/images/f33c0fc57920840fb7be498bd7fbc484.jpeg" alt />
        </a>
      </swiper-slide>
      <div class="swiper-pagination pagination-home pr-3 py-2" slot="pagination"></div>
    </swiper>
    <!-- 轮播图end -->

    <!-- 九宫格start -->
    <div class="nav-icons mt-3 bg-white text-dark text-center">
      <div class="d-flex flex-wrap">
        <div class="nav-item my-75">
          <i class="sprite sprite-blz"></i>
          <div class="py-1">爆料站</div>
        </div>
        <div class="nav-item my-75">
          <i class="sprite sprite-gsz"></i>
          <div class="py-1">故事站</div>
        </div>
        <div class="nav-item my-75">
          <i class="sprite sprite-zbsc"></i>
          <div class="py-1">周边商城</div>
        </div>
        <div class="nav-item my-75">
          <i class="sprite sprite-tyf"></i>
          <div class="py-1">体验服</div>
        </div>
        <div class="nav-item my-75" v-show="navItem">
          <i class="sprite sprite-xrzq"></i>
          <div class="py-1">新人专区</div>
        </div>
        <div class="nav-item my-75" v-show="navItem">
          <i class="sprite sprite-rycc"></i>
          <div class="py-1">荣耀·传承</div>
        </div>
        <div class="nav-item my-75" v-show="navItem">
          <i class="sprite sprite-mnzzlk"></i>
          <div class="py-1">模拟战资料库</div>
        </div>
        <div class="nav-item my-75" v-show="navItem">
          <i class="sprite sprite-wzyd"></i>
          <div class="py-1">王者营地</div>
        </div>
        <div class="nav-item my-75" v-show="navItem">
          <i class="sprite sprite-gzh"></i>
          <div class="py-1">公众号</div>
        </div>
        <div class="nav-item my-75" v-show="navItem">
          <i class="sprite sprite-bbjs"></i>
          <div class="py-1">版本介绍</div>
        </div>
        <div class="nav-item my-75" v-show="navItem">
          <i class="sprite sprite-djhj"></i>
          <div class="py-1">对局环境</div>
        </div>
        <div class="nav-item my-75" v-show="navItem">
          <i class="sprite sprite-wzwyt"></i>
          <div class="py-1">无限王者团</div>
        </div>
        <div class="nav-item my-75" v-show="navItem">
          <i class="sprite sprite-czhdy"></i>
          <div class="py-1">创意互动营</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex jc-center ai-center" @click="navItem = !navItem">
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
      heroCats: [],
      navItem: false
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