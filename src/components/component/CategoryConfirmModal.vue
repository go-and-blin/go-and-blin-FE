<script setup>
import {onMounted, ref, watch} from "vue";
import {Category} from "@/domain/category/category.js";
import {categoryService} from "@/domain/category/categoryService.js";

const mainCategories = ref(null);
const subCategories = ref<Array<Category>>([]);
const selectCategory = ref(null);

onMounted(async () => {
  await categoryService.getCategories();
  mainCategories.value = categoryService.getMainCategory();

})

watch(selectCategory, () => {
  subCategories.value = categoryService.getSubCategory(selectCategory.value)
})
</script>

<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <select class="form-select" v-model="selectCategory">
            <option v-for="(category, index) in mainCategories "
                    :key="index"
                    :value="category">
              {{ category }}
            </option>
          </select>

          <select class="form-select">
            <option v-for="category in subCategories"
                    :key="category.id"
                    :value="category.title">
              {{ category.title }}
            </option>
          </select>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>