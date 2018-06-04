<template>
    <div>
      <h2 class="sub-header">编辑英雄</h2>
      <form>
          <div class="form-group">
            <label for="heroesname">英雄名称</label>
            <input type="text" v-model="formData.name" class="form-control" id="heroesname" placeholder="英雄名称" value="xxx">
          </div>
          <div class="form-group">
            <label for="heroesgender">英雄性别</label>
            <input type="text" v-model="formData.gender" class="form-control" id="heroesgender" placeholder="英雄性别" value="xxx">
          </div>
          <button @click.prevent="handleEdit" type="submit" class="btn btn-success">提交</button>
      </form>
    </div>
</template>

<script>
// 导入axios
// import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      },
      id: -1
    };
  },
  created() {
    // 获取url上的id
    this.id = this.$route.params.id;
    // 加载数据
    this.loadData();
  },
  methods: {
    loadData() {
      this.$http.get(`http://localhost:3000/heroes/${this.id}`, this.formData)
        .then((res) => {
          if (res.status === 200) {
            // 添加成功
            this.formData = res.data;
          };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleEdit(id) {
      this.$http.patch(`http://localhost:3000/heroes/${this.id}`, this.formData)
        .then((res) => {
          if (res.status === 200) {
            // 修改成功
            this.$router.push({
              name: 'heroes'
            });
          };
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>
