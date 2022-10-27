<template>
  <div id='home'>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import { getHomeMultidata } from "@/network/home"

export default {
  components: {
    NavBar
  },
  data() {
    return {
      // result: null,
      banner: [],
      recommend: [],
      dKeyword: [],
      keywords: []
    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      // this.result = res
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      this.dKeyword = res.data.dKeyword.list
      this.keywords = res.data.keywords.list
    })
  }
}
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>