import Mock from "mockjs";

Mock.mock("/api/admin", {
  logoUrl: "../assets/logo.png",
  logoName: "趣 媒1",
  user: {
    name: "超级管理员1",
    url: "../assets/logo.png"
  }
});
