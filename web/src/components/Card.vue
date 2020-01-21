<template>
  <div class="card bg-white p-4 mt-3">
    <div class="card-header d-flex pb-3">
      <i class="iconfont fs-xl" :class="icon"></i>
      <span class="fs-xl flex-1 mx-1">{{title}}</span>
      <i class="iconfont icon-caidan"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.card {
  .card-header {
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}
</style>