<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black px-3 py-2 d-flex ai-center text-white">
      <img src="../assets/logo.png" height="30" />
      <div class="px-2 flex-1">
        <span class="pr-3">王者荣耀</span>
        <span>攻略站</span>
      </div>
      <router-link to="/" tag="div">更多英雄 &gt;</router-link>
    </div>
    <div class="top" :style="{'background-image': `url(${model.banner})`}">
      <div class="info p-3 h-100 text-white d-flex flex-column jc-end">
        <div>{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div>{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="pt-1 d-flex jc-between ai-center">
          <div class="scores" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark-1">{{model.scores.survive}}</span>
          </div>
          <router-link tag="span" to="/" class="text-grey fs-sm">皮肤: 2 &gt;</router-link>
        </div>
      </div>
    </div>
    <!-- end of top -->
    <div>
      <!-- 导航 -->
      <div class="px-3 bg-white">
        <div class="nav jc-around pb-2 pt-3 border-bottom">
          <div class="nav-item active">英雄初始</div>
          <div class="nav-item">进阶攻略</div>
        </div>
      </div>
      <!-- 轮播 -->
      <swiper>
        <swiper-slide>
          <!-- 介绍 -->
          <div class="bg-white px-3 pb-3 border-bottom">
            <div class="d-flex py-2">
              <router-link to="/" tag="button" class="btn btn-lg flex-1 mr-2">
                <i class="iconfont icon-play"></i>
                <span>英雄介绍视频</span>
              </router-link>
              <router-link to="/" tag="button" class="btn btn-lg flex-1">
                <i class="iconfont icon-tupian"></i>
                <span>一图识英雄</span>
              </router-link>
            </div>
            <div class="skills mt-4">
              <div class="d-flex jc-around">
                <img
                  class="icon"
                  :class="{active: currentSkillIndex === i}"
                  @click="currentSkillIndex = i"
                  :src="skill.icon"
                  v-for="(skill, i) in model.skills"
                  :key="i"
                />
              </div>
              <div class="d-flex my-4" v-if="currentSkill">
                <h3 class="m-0 pr-3">{{currentSkill.name}}</h3>
                <span class="text-grey fs-sm">(冷却值：{{currentSkill.delay}} 消耗：{{currentSkill.cost}})</span>
              </div>
              <p class="border-bottom pb-3">{{currentSkill.description}}</p>
              <p class="text-grey-1 mb-0">小提示: {{currentSkill.tips}}</p>
            </div>
          </div>
          <!-- 出装推荐 -->
          <m-card class="equipage px-3" plain title="出装推荐" icon="icon-caidan1">
            <div class="fs-lg py-3">顺风出装</div>
            <div class="d-flex jc-around">
              <div v-for="(item, i) in model.items1" :key="i">
                <img :src="item.icon" />
                <div class="fs-xs">{{item.name}}</div>
              </div>
            </div>
            <div class="border-bottom mt-1"></div>
            <div class="fs-lg py-3">逆风出装</div>
            <div class="d-flex jc-around">
              <div v-for="(item, i) in model.items2" :key="i">
                <img :src="item.icon" />
                <div class="fs-xs">{{item.name}}</div>
              </div>
            </div>
          </m-card>
          
          <m-card title="使用技巧" plain icon="icon-caidan1"><p class="mb-0">{{model.usageTips}}</p></m-card>

          <m-card title="对抗技巧" plain icon="icon-caidan1"><p class="mb-0">{{model.battleTips}}</p></m-card>

          <m-card title="团战思路" plain icon="icon-caidan1"><p class="mb-0">{{model.teamTips}}</p></m-card>

          <m-card title="英雄关系" plain icon="icon-caidan1">
            <div class="fs-lg pt-3">最佳搭档</div>
            <div class="d-flex pt-3" v-for="(item, i) in model.partners" :key="i">
              <img :src="item.hero.avatar" height="50px" class="pr-2">
              <p class="m-0">{{item.description}}</p>
            </div>
          </m-card>
        </swiper-slide>
        <swiper-slide class="bg-white">111</swiper-slide>
      </swiper>
    </div>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null,
      currentSkillIndex: 0
    };
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex];
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/heroes/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.page-hero {
  .top {
    height: 50vw;
    background-size: 100% 100%;
    .info {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      .scores {
        .badge {
          margin: 0 0.3rem;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          font-size: 0.6rem;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
  .skills {
    .icon {
      width: 5.0769rem;
      height: 5.0769rem;
      border: 3px solid map-get($map: $colors, $key: "white");
      border-radius: 45%;
      &.active {
        border: 3px solid map-get($map: $colors, $key: "primary");
      }
    }
  }
  .equipage {
    img {
      height: 3.4615rem;
      border-radius: 50%;
    }
  }
}
</style>