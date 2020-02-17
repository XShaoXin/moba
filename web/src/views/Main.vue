<template>
  <div class="main">
    <div class="topbar bg-black px-3 py-2 d-flex ai-center">
      <img src="../assets/logo.png" height="30" />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="fs-xxs text-grey-1 pt-1">团战成就更多</div>
      </div>
      <button class="bg-primary btn" type="button">立即下载</button>
    </div>
    <div class="nav nav-inverse text-white bg-primary py-3 jc-around">
      <div class="nav-item active">
        <router-link to="/" tag="div">首页</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/" tag="div">攻略中心</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/" tag="div">赛事中心</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  .topbar{
    position: sticky;
    top: 0;
    z-index: 999;
  }
</style>