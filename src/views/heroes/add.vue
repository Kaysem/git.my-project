<template>
    <div>
      <h2 class="sub-header">添加英雄</h2>
      <form>
          <div class="form-group">
            <label for="heroesname">英雄名称</label>
            <input type="text" class="form-control" id="heroesname" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="heroesgender">英雄性别</label>
            <input type="text" class="form-control" id="heroesgender" placeholder="英雄性别">
          </div>
          <button type="submit" class="btn btn-success">提交</button>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      add: []
    };
  }
};
</script>

<style>

</style>
