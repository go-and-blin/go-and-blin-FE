<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";

const categories = ["ALL", "GO", "BLIN", "PROJECT"]
const activeCategory = ref("ALL")


const selectCategory = (category) => {
  activeCategory.value = category;
};

</script>

<template>
  <div class="category-bar">
    <div
        v-for="(category, index) in categories"
        :key="index"
        class="item"
        :class="{active: activeCategory === category, inactive: activeCategory !== category}"
        @click="selectCategory(category)"
    >
      <p>{{category}}</p>
    </div>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&family=Noto+Sans+KR:wght@100..900&display=swap');

.category-bar {
  display: flex;
  flex-direction: row;
}

.item {
  height: 100%;
  padding-left: 2%;
  min-width: 50px;
  cursor: pointer;
  user-select: none;
}

p {
  text-align: center;
  font-size: 1.5em;
  font-family: "Jua", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.inactive {
  color: gray; /* 비활성화 시 회색 표시 */
  opacity: 0.6; /* 살짝 투명도 추가 */
}

.active {
  color: black; /* 활성화 시 기본 검정색 */
  font-weight: bold; /* 활성화 시 글씨 두껍게 */
  opacity: 1;        /* 투명도 100% */
}

</style>
