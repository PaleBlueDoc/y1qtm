import Mock from "mockjs";

// 登陆用户信息API
Mock.mock("/api/admin", {
  user: {
    name: "超级管理员1",
    url: "../assets/logo.png"
  }
});

// 菜单列表信息API
Mock.mock("/api/menu", {
  firstMenuList: [
    {
      name: "用户管理",
      icon: "el-icon-user",
      path: "/user"
    },
    // {
    //   name: "测试菜单2",
    //   url: "",
    //   secondMenuList: [
    //     { name: "测试菜单1-1", url: "" },
    //     { name: "测试菜单1-2", url: "" }
    //   ]
    // }
  ]
});
