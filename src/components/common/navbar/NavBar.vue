<template>
  <div class='nav-bar'>
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

  }
}
</script>
<style scoped>
.nav-bar {
  display: flex;
  /* 导航栏高度一般都为44px */
  height: 44px;
  /* 有内容后line-height可以撑起来height */
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1)
}

.left,
.right {
  width: 60px;
}

.center {
  /* 将剩余部分全部占据 */
  flex: 1;
}
</style>