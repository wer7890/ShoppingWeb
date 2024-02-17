<script lang="ts" setup>
import Carousel from './Carousel.vue'
import { ref } from "vue";

// 設定跑馬燈是否出現
const carouselShowBol = ref(true)

const carouselShow = () => {
    carouselShowBol.value = true
}

const carouselHide = () => {
    carouselShowBol.value = false
}

// menu預設
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

</script>


<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0" @click="carouselShow">
      <img style="width: 50px" src="../assets/apple-logo.png" alt="Element logo" />
    </el-menu-item>


    <div class="flex-grow"></div>


    <el-menu-item index="1" @click="carouselHide"><router-link to="/Introduce">品牌介紹</router-link></el-menu-item>
    <el-menu-item index="2" @click="carouselHide"><router-link to="/Commodity">商品列表</router-link></el-menu-item>
    <el-menu-item index="3" @click="carouselHide"><router-link to="/Activity">優惠活動</router-link></el-menu-item>


    <div class="flex-grow"></div>
    <!--
    <el-link :icon="Edit">Edit</el-link>
    <el-link>
      Check<el-icon class="el-icon--right"><icon-view /></el-icon>
    </el-link> -->
    <div class="iconBox">
      <el-icon :size="45"><User /></el-icon>
      <el-icon :size="45"><ShoppingCart /></el-icon>
    </div>
  </el-menu>

  <Carousel v-if="carouselShowBol"></Carousel>
  
</template>


<style scoped>
/* 把menu選項置中 */
.flex-grow {
  flex-grow: 1;
}

/* 設定menu選項距離 */
div .el-icon {
  margin-right: 30px;
}

/* 中間選項設定 */
.el-menu-item {
  font-size: 20px;
  margin-right: 20px;
}

/* menu置頂 */
.el-menu {
  position: sticky;
  top: 0;
  left: 0;
  background-image: radial-gradient(transparent 1px, #ffffff 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  border-bottom: 1px solid #ccc;
  z-index: 999;
}
/* 右方選項 */
.iconBox {
  display: flex;
}

/* 清除router-link底線 */
a{
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
</style>
