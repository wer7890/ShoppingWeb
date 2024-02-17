<script setup>
</script>

<template>
   <!-- <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div> -->
  <div>
  <el-col style="flex-direction: column;" >
    <div>1</div>
    <div>2</div>
  </el-col>
  <el-col>1</el-col>
</div>
</template>

<style scoped>
.el-header.el-footer{
  background-color: antiquewhite;
}
.el-main{
  background-color: aqua;
}
</style>