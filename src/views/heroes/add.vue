<template>
    <div>
      <h2 class="sub-header">添加英雄</h2>
      <form>
          <div class="form-group">
            <label for="heroesname">英雄名称</label>
            <input type="text" v-model="formData.name" class="form-control" id="heroesname" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="heroesgender">英雄性别</label>
            <input type="text" v-model="formData.gender" class="form-control" id="heroesgender" placeholder="英雄性别">
          </div>
          <button @click.prevent="handleAdd()" type="submit" class="btn btn-success">提交</button>
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
      }
    };
  },
  methods: {
    handleAdd() {
      this.$http.post('http://localhost:3000/heroes', this.formData)
        .then((res) => {
          if (res.status === 201) {
            // 添加成功
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
