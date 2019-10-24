<template>
  <div class="home">
    <el-container class="qm-content">
      <!-- left -->
      <el-aside class="qm-aside" width="200px">
        <div class="qm-logo">
          <avue-avatar class="qm-logo-avatar" :size="100" src></avue-avatar>
          <div class="qm-logo-name">
            <span>趣 媒</span>
          </div>
        </div>
        <QmMenu :tabOption="tabOption" />
      </el-aside>
      <!-- content -->
      <el-container>
        <!-- content-head -->
        <el-header class="qm-header">
          <el-row>
            <el-col :span="12">
              <div class="qm-header-search">
                <el-input
                  placeholder="请输入搜索关键词"
                  suffix-icon="iconfont icon-icon-test"
                  v-model="headerSearch"
                ></el-input>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="qm-header-right">
                <div class="qm-header-right-box">
                  <avue-avatar class="qm-user-avatar" :size="50" :src="user.url"></avue-avatar>
                </div>
                <div class="qm-header-right-box">
                  <span class="qm-user-name">{{user.name}}</span>
                </div>
                <div class="qm-header-right-box">
                  <i class="iconfont icon-settings"></i>
                </div>
                <div class="qm-header-right-box">
                  <i class="iconfont icon-icon-test3"></i>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <!-- content-main -->
        <el-main>
          <QmTabs :tabOption="tabOption"></QmTabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import QmMenu from "../components/menu.vue";
import QmTabs from "../components/tabs.vue";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      logoUrl: "",
      logoName: "",
      user: {
        name: "",
        url: ""
      },
      tabOption: {
        activeTabName: "1",
        tabList: [
          {
            key: "1",
            closable: false,
            name: "1",
            title: "首页",
            component: () => import("../views/Index.vue")
          }
        ]
      }
    };
  },
  components: {
    QmMenu,
    QmTabs
  },
  created() {
    //TODO: 首页LOGO及登陆用户的头像和名称获取
    axios.get("/api/admin").then(response => {
      if (response.data) {
        this.user = response.data.user;
      }
    });
  }
};
</script>
  
<style scoped>
.qm-aside {
  min-height: 600px;
  width: 200px;
  background-color: #4d5ebd;
}
.qm-logo {
  height: 200px;
  background-color: #3a4ba6;
  text-align: center;
  color: #fff;
}
.qm-logo-avatar {
  margin-top: 20px;
}
.qm-logo-name {
  margin-top: 10px;
}

.qm-header {
  line-height: 60px;
  background-color: #e8e8e8;
}
.qm-header-search {
  width: 300px;
}
.qm-header-right {
  float: right;
}

.qm-header-right-box {
  display: inline;
  margin-left: 10px;
}
</style>