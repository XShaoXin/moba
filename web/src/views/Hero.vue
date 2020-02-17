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
    <div>{{model.name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
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
.page-hero {
  .top {
    height: 50vw;
    background-size: 100% 100%;
    .info {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      .scores {
        .badge {
          margin:0 0.3rem;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          font-size: 0.6rem;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2)
        }
      }
    }
  }
}
</style>