<template>
  <!-- id用于仅有一个的，不会重复 -->
  <div id="tab-bar">
    <slot></slot>
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
#tab-bar {
  /* 水平分布 */
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 设置一个阴影缓冲 x向右为正 y向下为正 位移 透明度  */
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
</style>