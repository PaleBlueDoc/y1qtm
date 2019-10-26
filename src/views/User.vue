<template>
  <div class="user">
    <avue-crud
      v-model="obj"
      :data="data"
      :option="option"
      :page="page"
      @on-load="onLoad"
      @row-save="rowSave"
      @search-change="searchChange"
    ></avue-crud>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    let crud = this;
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== crud.obj.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      obj: {},
      data: [],
      page: { pageSize: 10, pageSizes: [10, 50, 100] },
      option: {
        index: true,
        indexLabel: "序号",
        border: true,
        delbtn: true,
        align: "center",
        menuAlign: "center",
        columnBtn: false,
        column: [
          {
            label: "id",
            prop: "_id",
            hide: true,
            addDisabled: true,
            addDisplay: false
          },
          {
            label: "邮箱",
            search: {
              searchFilterable: true
            },
            prop: "email",
            rules: [
              {
                required: true,
                message: "请输入邮箱",
                trigger: "blur"
              }
            ]
          },
          {
            label: "状态",
            prop: "status",
            search: {
              searchDefault: "ACTIVE"
            },
            type: "select",
            dicData: [
              { label: "正常", value: "ACTIVE" },
              { label: "冻结", value: "FREEZE" }
            ],
            rules: [
              {
                required: true,
                message: "请选择状态",
                trigger: "blur"
              }
            ]
          },
          {
            label: "密码",
            prop: "password",
            hide: true,
            type: "password",
            rules: [
              {
                validator: validatePass,
                trigger: "blur"
              }
            ]
          },
          {
            label: "确认密码",
            prop: "password",
            prop: "oldpassword",
            hide: true,
            rules: [{ validator: validatePass2, trigger: "blur" }]
          }
        ]
      }
    };
  },
  methods: {
    onLoad(page) {
      //TODO:API接口CORS跨域
      axios
        .get(this.GLOBAL.apiHost + "/users", {
          params: { pageNo: page.currentPage, pageSize: page.pageSize }
        })
        .then(response => {
          if (response.data) {
            this.page.total = response.data.paginator.itemCount;
            this.data = response.data.itemsList;
          }
        });
    },
    rowSave(row, done, loading) {
      //TODO:添加接口未做验证，status没有默认值
      axios
        .post(this.GLOBAL.apiHost + "/users", {
          params: row
        })
        .then(response => {
          if (response.data._id) {
            this.$message.success("添加成功");
          }
          done();
        });
    },
    searchChange() {}
  }
};
</script>

<style scoped>
</style>