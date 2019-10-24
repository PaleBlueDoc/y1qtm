<template>
  <el-tabs v-model="tabOption.activeTabName" type="card" @tab-remove="removeTab">
    <el-tab-pane
      :closable="item.closable"
      v-for="item in tabOption.tabList"
      :key="item.key"
      :label="item.title"
      :name="item.name"
      lazy
    >
      <component :is="item.component"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "QmTabs",
  props: ["tabOption"],
  methods: {
    removeTab: function(tagName) {
      let tabs = this.tabOption.tabList;
      let activeName = this.tabOption.activeTabName;
      if (activeName === tagName) {
        tabs.forEach((tab, index) => {
          if (tab.name === tagName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.tabOption.activeTabName = activeName;
      this.tabOption.tabList = tabs.filter(tab => tab.name !== tagName);
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>