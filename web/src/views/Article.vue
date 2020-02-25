<template>
  <div class="page-article" v-if="model">
    <router-link tag="div" to="/" class="d-flex py-3 px-2 border-bottom text-blue">
      <i class="iconfont icon-arrow-lift fs-xl hhh"></i>
      <strong class="flex-1 fs-lg text-ellipsis">{{model.title}}</strong>
      <div class="fs-xs text-grey">{{model.createdAt | date}}</div>
    </router-link>
    <div v-html="model.body" class="px-3 fs-lg body"></div>
    <div class="px-2 py-3 border-top d-flex">
      <i class="iconfont icon-lianjie"></i>
      <strong class="fs-lx mx-2 text-blue">相关资讯</strong>
    </div>
    <div class="px-2 fs-lg text-ellipsis">
      <router-link
        class="py-1"
        tag="div"
        :to="`/article/${item._id}`"
        v-for="(item, index) in model.related"
        :key="index"
      >{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    id: { required: true }
  },
  filters: {
    date(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    id: "fetch"
    // id() {
    //   this.fetch;
    // }
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
  .icon-arrow-lift,
  .icon-lianjie {
    font-size: 2.3077rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>