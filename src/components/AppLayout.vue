<template>
  <div class="root">
    <div :style="`background-image:url(${imgUrl})`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isBackButtonVisable"
          @click="backFunc"
          class="back"
          type="primary"
          :icon="Back"
          circle
        />
        <el-button class="btn">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { Back } from "@element-plus/icons-vue";
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
    required: true,
  },
  isBackButtonVisable: {
    type: Boolean,
    default: true,
  },
});
</script>
	
<style lang="scss" scoped>
@import "../assets/styles/main";

.root {
  display: flex;
  background-color: $background;
  min-height: 100vh;
}
.img {
  width: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
.main {
  position: relative;
  width: 50%;
  padding: 32px 40px;
}
.btn {
  position: absolute;
  top: 32px;
  right: 40px;
  font-size: 16px;
  font-family: "Raleway", "Arial", sans-serif;
  background: $accent;
  border-color: $accent;
  color: $text;
  &:hover,
  &:active {
    background-color: darken($accent, 10%);
    border-color: darken($accent, 10%);
  }
}
.btns {
  display: flex;
  justify-content: space-between;
}
.back {
  background-color: transparent;
  border-color: #fff;
  &:hover {
    border-color: $accent;
  }
}
</style>