<template>
  <el-menu
    class="qm-menu"
    background-color="#4d5ebd"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="select"
  >
    <template v-for="firstMenu in firstMenuList">
      <template v-if="firstMenu.secondMenuList">
        <el-submenu :index="firstMenu.path" :key="firstMenu">
          <template slot="title">
            <i :class="firstMenu.icon?firstMenu.icon:'el-icon-menu'"></i>
            <span>{{firstMenu.name}}</span>
          </template>
          <template v-for="secondMenu in firstMenu.secondMenuList">
            <el-menu-item :index="secondMenu.path" :key="secondMenu">{{secondMenu.name}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="firstMenu.path" :key="firstMenu">
          <i :class="firstMenu.icon?firstMenu.icon:'el-icon-menu'"></i>
          <span slot="title" :class="'qm-menuname-'+firstMenu.path">{{firstMenu.name}}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
import axios from "axios";

export default {
  name: "qmMenu",
  props: ["tabOption"],
  methods: {
    select: function(index, indexPath) {
      indexPath;
      let newTab = {
        key: index,
        closable: true,
        name: index,
        title: document.getElementsByClassName("qm-menuname-" + index)[0]
          .innerHTML,
        component: () => import("../views" + index + ".vue")
      };
      if (
        JSON.stringify(this.tabOption.tabList).indexOf(':"' + index + '",') ==
        -1
      ) {
        this.tabOption.tabList.push(newTab);
      }
      this.tabOption.activeTabName = index;
    }
  },
  data() {
    return {
      firstMenuList: []
    };
  },
  created() {
    //TODO: 菜单列表内容获取
    axios.get(this.GLOBAL.apiHost + "/api/menu").then(response => {
      if (response.data) {
        this.firstMenuList = response.data.firstMenuList;
      }
    });
  }
};
</script>

<style scoped>
.qm-menu {
  border: none;
}
</style>