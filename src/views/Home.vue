<template>
  <div class="home">
    <el-container class="qm-content">
      <el-aside class="qm-aside" width="200px">
        <div class="qm-user">
          <el-avatar class="qm-user-avatar" :size="100" :src="circleUrl"></el-avatar>
          <div class="qm-user-name">
            <span>趣 媒</span>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header class="qm-header">
          <div ></div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home"
};
</script>
  
<style scoped>
.qm-aside {
  min-height: 600px;
  width: 200px;
  background-color: #4d5ebd;
}
.qm-user {
  height: 200px;
  background-color: #3a4ba6;
  text-align: center;
  color: #fff;
}
.qm-user-avatar {
  margin-top: 20px;
}
.qm-user-name {
  margin-top: 10px;
}

.qm-header{
  background-color: #e8e8e8
}
</style>