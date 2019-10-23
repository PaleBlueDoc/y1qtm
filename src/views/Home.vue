<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="qm-user">
          <div class="qm-user-avatar"></div>
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
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
.qm-user {
  height: 200px;
  background-color: #3a4ba6;
}
</style>