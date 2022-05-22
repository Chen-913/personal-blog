<template>
  <Layout>
    <template v-slot:main>
      <div class="detail-container" ref="detailContainer" v-loading="isLoading">
        <BlogDetail v-if="data" :articleData="data" />
        <!-- 评论组件 -->
        <MessageArea v-if="data" />
      </div>
    </template>
    <template #right>
      <div class="toc-container" v-loading="isLoading">
        <h2>目录</h2>
        <BlogTOC :list="data" v-if="tocIsExist" />
        <Empty v-else />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout/Layout.vue";
import BlogDetail from "./BlogDetail.vue";
import BlogTOC from "./BlogTOC.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlog } from "@/api/blog.js";
import MessageArea from "@/components/MessageArea/MessageArea.vue";
import mainScroll from "@/mixins/mainScroll.js";
import siteTitle from "@/utils/siteTitle";
import Empty from "@/components/Empty/Empty.vue";
export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    MessageArea,
    Empty,
  },
  mixins: [fetchData(null), mainScroll("detailContainer")],
  methods: {
    async getData() {
      let result = await getBlog(this.$route.params.blogId);
      // 如果没有数据，则跳转到404页面
      if (!result) {
        this.$router.push("/404");
        return;
      }
      siteTitle.setRouteTitle(result.title);
      return result;
    },
  },
  watch: {
    data: {
      // 监听 this.data data 加载完毕后，如果url链接中指明了 hash，那么就滚动至对应的节点中
      handler() {
        if (location.hash) {
          let hash = location.hash;
          location.hash = "";
          setTimeout(() => {
            location.hash = hash;
          }, 500);
        }
      },
    },
  },
  computed: {
    tocIsExist() {
      return this.data?.toc?.length !== 0;
    },
  },
};
</script>

<style scoped lang="less">
.detail-container,
.toc-container {
  position: relative;
  height: 100%;
}
.detail-container {
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 50px;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.toc-container {
  width: 300px;
  h2 {
    text-align: center;
  }
}
</style>
