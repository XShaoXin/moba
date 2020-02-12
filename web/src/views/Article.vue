<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom text-blue">
      <i class="iconfont icon-arrow-lift fs-xl"></i>
      <strong class="flex-1 fs-lg text-ellipsis">{{model.title}}</strong>
      <div class="fs-xs text-grey">{{model.createdAt | date}}</div>
    </div>
    <div v-html="model.body" class="px-3 fs-lg body"></div>
    <div class="pt-2 border-top">
      <i class="iconfont icon-lianjie"></i>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
export default {
  props: {
    id: { required: true }
  },
  filters:{
    date(val){
      return dayjs(val).format('YYYY-MM-DD')
    }
  },
  data() {
    return {
      model: null
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/article/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss">
.page-article {
  .icon-arrow-lift{
    font-size: 30px;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe{
      max-width: 100%;
      height: auto;
    }
  }
}
</style>