<template>
  <div class="blog-toc-container">
    <MenuList :list="tocWithSelect" @noticed="handleNoticed" />
  </div>
</template>

<script>
// 文章Detail标题目录组件
import MenuList from "@/components/MenuList/MenuList.vue";
import { debounce } from "@/utils";
export default {
  components: {
    MenuList,
  },
  props: {
    list: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      // 当前浏览的标题anchor
      activeAnchor: "",
    };
  },
  computed: {
    tocWithSelect() {
      // 由于不知道目录结构的层级关系，需要用到递归得出被选中的目录层级
      let addSelected = (arr = []) => {
        return arr.map((item) => {
          return {
            ...item,
            isSelected: this.activeAnchor === item.anchor,
            children: addSelected(item.children),
          };
        });
      };
      return addSelected(this.list.toc);
    },
    tocDoms() {
      let arr = [];
      let addDom = (tocArr) => {
        for (const item of tocArr) {
          let dom = document.getElementById(item.anchor);
          arr.push(dom);
          if (item.children && item.children.length) {
            addDom(item.children);
          }
        }
      };
      addDom(this.list.toc);
      return arr;
    },
  },
  methods: {
    handleNoticed(item) {
      location.hash = item.anchor;
    },
    setSelect(scrollDom) {
      if (!scrollDom) {
        // 没有传入指定元素则什么都不做
        return;
      }
      this.activeAnchor = "";
      // 设置被选中的区域，通过这里控制目录跳转的精确程度
      let range = 100;
      for (const dom of this.tocDoms) {
        // 有可能出现目录上有，但文章详情页没有的标题，则自动跳过
        if (!dom) {
          continue;
        }
        let top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 该标题的dom元素必然在选中范围内
          this.activeAnchor = dom.id;
          // 找到了就结束循环，不必再往下找
          return;
        } else if (top > range) {
          // 标题的dom元素还在选中范围的下面，表示还没到
          return;
        } else {
          // 标题的dom元素在选中范围的上面
          // 假设自己是激活的，再继续遍历后面的
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created() {
    this.$eventBus.$on("mainScroll", debounce(this.setSelect));
  },
  beforeDestroy() {
    this.$eventBus.$off("mainScroll", this.setSelect);
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  padding: 0 20px;
}
</style>
