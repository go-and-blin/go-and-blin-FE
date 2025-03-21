<script setup lang="ts">
type Props = {
  id: string,
  title: string,
  image?: string,
  nickname: string,
  createTime: string
};

const props = defineProps<Props>();

const formatDate = (isoString) => {
  const date = new Date(isoString); // ISO 문자열을 Date 객체로 변환
  const formatter = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatter.format(date);
}

const formattedDate = formatDate(props.createTime);
</script>

<template>
  <div class="post-thumbnail" v-if="props.image">
    <img class="thumbnail" src="" alt="">
  </div>
  <div class="post-content">
    <h4 class="nickname"><span style="color: grey; font-size: 0.8rem">by</span> {{ props.nickname }}</h4>
    <h4 class="title">{{ title }}</h4>
    <h4 class="date">{{ formattedDate }}</h4>
  </div>
</template>

<style scoped>


.post-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.post-thumbnail {
  width: 100%;
  height: auto;
  aspect-ratio: 1/0.5;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.nickname {
  margin: 0;
  font-size: 1rem;
}

.date {
  font-size: 0.8rem;
  margin: 0;
}

.title {
  font-size: 1.3rem;
  margin: 10px 0;
  line-height: 1.5;
  word-break: break-word;
}
</style>
