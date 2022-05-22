<template>
  <div class="blog-categoryid-container" v-loading="isLoading">
    <h2>分类列表</h2>
    <MenuList :list="list" @noticed="handleNoticed" v-if="!isLoading" />
  </div>
</template>

<script>
import MenuList from "@/components/MenuList/MenuList.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlogType } from "@/api/blog.js";
export default {
  mixins: [fetchData([])],
  components: {
    MenuList,
  },
  methods: {
    async getData() {
      return await getBlogType();
    },
    handleNoticed(item) {
      const query = {
        page: this.routeInfo.page,
        limit: this.routeInfo.limit,
      };
      // 点击的分类为全部
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 如果点击的分类是指定的分类
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
  computed: {
    routeInfo() {
      return {
        page: +this.$route.query.page || 1,
        limit: +this.$route.query.limit || 10,
        categoryId: this.$route.params.categoryId || -1,
      };
    },
    list() {
      const allItem = {
        name: "全部",
        articleCount: this.data.reduce((a, b) => a + b.articleCount, 0),
        id: -1,
        isSelected: this.routeInfo.categoryId === -1,
      };
      return [
        allItem,
        ...this.data.map((item, index) => {
          return {
            ...item,
            isSelected: item.id === this.routeInfo.categoryId,
          };
        }),
      ];
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.blog-categoryid-container {
  width: 300px;
  height: 100%;
  border-left: 1px solid @gray;
  overflow-y: auto;
  padding: 0 20px;
  h2 {
    text-align: center;
  }
}
</style>
