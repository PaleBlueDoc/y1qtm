<template>
  <el-menu
    class="qm-menu"
    background-color="#4d5ebd"
    text-color="#fff"
    active-text-color="#ffd04b"
    router="true"
    :default-active="firstMenuList?firstMenuList[0].path:''"
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
          <span slot="title">{{firstMenu.name}}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
import axios from "axios";

export default {
  name: "qmMenu",
  data() {
    return {
      firstMenuList: []
    };
  },
  created() {
    //TODO: 菜单列表内容获取
    axios.get("/api/menu").then(response => {
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