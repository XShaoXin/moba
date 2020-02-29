<template>
  <div>
    <!-- 轮播图start -->
    <swiper :options="swiperOption" v-if="slideshow">
      <swiper-slide v-for="(item, index) in slideshow" :key="index">
        <a :href="item.url">
          <img class="w-100" :src="item.image" />
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
        <div class="nav-item my-75" v-show="sprite">
          <i class="sprite sprite-xrzq"></i>
          <div class="py-1">新人专区</div>
        </div>
        <div class="nav-item my-75" v-show="sprite">
          <i class="sprite sprite-rycc"></i>
          <div class="py-1">荣耀·传承</div>
        </div>
        <div class="nav-item my-75" v-show="sprite">
          <i class="sprite sprite-mnzzlk"></i>
          <div class="py-1">模拟战资料库</div>
        </div>
        <div class="nav-item my-75" v-show="sprite">
          <i class="sprite sprite-wzyd"></i>
          <div class="py-1">王者营地</div>
        </div>
        <div class="nav-item my-75" v-show="sprite">
          <i class="sprite sprite-gzh"></i>
          <div class="py-1">公众号</div>
        </div>
        <div class="nav-item my-75" v-show="sprite">
          <i class="sprite sprite-bbjs"></i>
          <div class="py-1">版本介绍</div>
        </div>
        <div class="nav-item my-75" v-show="sprite">
          <i class="sprite sprite-djhj"></i>
          <div class="py-1">对局环境</div>
        </div>
        <div class="nav-item my-75" v-show="sprite">
          <i class="sprite sprite-wzwyt"></i>
          <div class="py-1">无限王者团</div>
        </div>
        <div class="nav-item my-75" v-show="sprite">
          <i class="sprite sprite-czhdy"></i>
          <div class="py-1">创意互动营</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex jc-center ai-center" @click="sprite = !sprite">
        <i class="sprite sprite-arrow mr-1" :class="{open: !sprite}"></i>
        <span v-text="sprite?'收起':'展开'"></span>
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
          el: ".pagination-home",
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        }
      },
      slideshow: null,
      newsCats: [],
      heroCats: [],
      sprite: false
    };
  },
  methods: {
    async fetchSlideshow() {
      const res = await this.$http.get("/ad");
      this.slideshow = res.data;
    },
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
    this.fetchSlideshow();
    this.fetchNewsCats();
    this.fetchHeroCats();
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

.open {
  transform: rotate(180deg);
}
</style>