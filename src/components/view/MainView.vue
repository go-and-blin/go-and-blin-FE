<script setup lang="ts">
import CategoryBar from "@/components/component/CategoryBar.vue";
import PostPreview from "@/components/component/PostPreview.vue";
import {onMounted, ref} from "vue";
import {postService} from "@/domain/post/postService.js";
import {Post} from "@/domain/post/post";

const lastId = ref<string>("");
const posts = ref<Post[]>([]);

onMounted(async () => {
  const response = await postService.getPosts(lastId.value);
  posts.value.push(...response)
});

</script>

<template>
  <div class="main">
    <CategoryBar></CategoryBar>
    <main>
      <ul class="post-grid-container">
        <li class="post-card" v-for="post in posts.values()" :key="post.id">
          <post-preview
              :id="post.id"
              :title="post.title"
              :nickname="post.nickname"
              :createTime="post.createTime"
          ></post-preview>
        </li>

      </ul>
    </main>
  </div>

</template>

<style scoped>
.post-grid-container {
  display: grid;
  grid-template-columns: repeat(4, calc(25% - 1rem));
  grid-gap: 1rem;
  padding: 0 0;
}

.post-card {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  user-select: none;
  aspect-ratio: 1/1;
  max-height: 310px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
