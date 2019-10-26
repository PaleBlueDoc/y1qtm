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
    }
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

// 用户信息集合
// 带参数的mock需要用正则匹配
Mock.mock(RegExp("/users" + ".*"), "get", {
  itemsList: [
    {
      _id: "5db43b024cc172001da86430",
      email: "test@102601.com",
      status: "ACTIVE"
    },
    {
      _id: "5db43bba4cc172001da86431",
      email: "test@102602.com",
      status: "FREEZE"
    }
  ],
  paginator: {
    itemCount: 2,
    perPage: 10,
    hasPrevPage: false,
    hasNextPage: false,
    currentPage: 1,
    pageCount: 1,
    slNo: 1,
    prev: null,
    next: null
  }
});

Mock.mock(RegExp("/users" + ".*"), "post", {
  _id: "5db454c84cc172001da86434",
  email: "test@102604.com",
  password: "test@102604.com",
  status: "ACTIVE",
  __v: 0
});
