<template>
  <m-card :title="title" :icon="icon">
    <div class="card-body pt-3">
      <div class="nav jc-between">
        <div
          class="nav-item"
          v-for="(item, i) in categories"
          :key="i"
          :class="{active: active === i}"
          @click="$refs.swiper.swiper.slideTo(i)"
        >
          <div class="nav-link">{{item.name}}</div>
        </div>
      </div>
    </div>
    <swiper
      :options="{autoHeight:true}"
      ref="swiper"
      @slide-change="() => {active = $refs.swiper.swiper.realIndex}"
    >
      <swiper-slide v-for="(item, index) in categories" :key="index">
        <slot name="items" :category="item"></slot>
      </swiper-slide>
    </swiper>
  </m-card>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>