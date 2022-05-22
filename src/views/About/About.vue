<template>
  <div class="about-container" v-loading="isLoading || !srcLoaded">
    <!-- <iframe
			v-if="data"
			:src="data"
			@load="srcLoaded = true"
			frameborder="0"
		></iframe> -->
    <h1 style="margin-left: 20px">hi~你好，这部分还没有开发完成哦</h1>
  </div>
</template>

<script>
// TODO：待开发部分
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: mapState("about", ["data", "isLoading"]),
  created() {
    // 设置定时器模拟加载成功
    let timer = null;
    timer = setTimeout(() => {
      this.srcLoaded = true;
      clearTimeout(timer);
      timer = null;
    }, 500);
    this.$store.dispatch("about/fetchData");
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
