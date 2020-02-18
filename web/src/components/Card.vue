<template>
  <div class="card bg-white p-3 mt-3 border-bottom">
    <div class="card-header d-flex" :class="{'border-bottom': !plain,'pb-3':!plain}">
      <i class="iconfont fs-xl" :class="icon"></i>
      <span class="fs-xl flex-1 mx-1">
        <strong>{{title}}</strong>
      </span>
      <i class="iconfont icon-caidan" v-if="!plain"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    plain: { type: Boolean }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>