<template>
  <div class='tab-bar-item' @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- isActive=true时给slot绑定active类名 -->
    <!-- 但插槽替换时，isActive无效，直接被替换为div，所以要用div进行包装 -->
    <!-- <slot :class="{active:isActive}" name="item-text"></slot> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  components: {},
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      // 当前活跃路由this.$route的path是否为该组件this的path
      // indexOf返回某个指定的字符串值在字符串中首次出现的位置，若没有找到匹配的字符串则返回-1
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  watch: {},
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* 设置元素的上边外距 */
  margin-top: 3px;
  /* 设置元素的垂直对齐方式，middle把此元素放置在父元素的中部 */
  /* img原本下边有3px，通过该设置可消除 */
  vertical-align: middle;
  margin-bottom: 2px;
}

/* 需求：用户自定义活跃状态按钮颜色，不应该更改TabBarItem.vue，而是直接动态传入颜色 */
/* .active {
  color: red;
}*/
</style> 