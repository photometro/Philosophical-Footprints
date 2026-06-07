<template>
  <div class="user-center">
    <div class="header">
      <img class="avatar" src='https://placehold.co/100x100.png' alt="avatar" />
      <p class="nickname">去拍地铁</p>
    </div>

    <div class="study-time-card">
      <p class="title">今日已学习</p>
      <p class="time">1 小时 20 分钟</p>
    </div>

    <h2 class="section-title">收藏夹</h2>
    <div class="favorites">
      <div v-for="quote in quotes" :key="quote.zh" class="quote-card">
        <p class="en">{{ quote.en }}</p>
        <p class="zh">{{ quote.zh }}</p>
        <p class="author">—— {{ quote.author }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const quotes = ref([]);

onMounted(() => {
  const stored = localStorage.getItem('favoritesQuotes');
  quotes.value = stored ? JSON.parse(stored) : [];
});
</script>

<style scoped>
.user-center {
  background-color: #0d0d0d;
  min-height: 100vh;
  padding: 20px;
  color: white;
  font-family: 'Helvetica Neue', sans-serif;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 999px;
  margin-bottom: 10px;
  border: 2px solid white;
}

.nickname {
  font-size: 16px;
  color: #eee;
}

.study-time-card {
  background: linear-gradient(to bottom right, #2f2f2f, #1f1f1f);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
}

.study-time-card .title {
  font-size: 14px;
  color: #ccc;
  margin-bottom: 10px;
}

.study-time-card .time {
  font-size: 24px;
  letter-spacing: 2px;
}

.section-title {
  font-size: 18px;
  margin-bottom: 15px;
}

.favorites {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.quote-card {
  background: linear-gradient(to bottom right, #2c2c2c, #1c1c1c);
  padding: 16px;
  border-radius: 16px;
}

.quote-card .en {
  font-size: 14px;
  color: #ccc;
  margin-bottom: 6px;
}

.quote-card .zh {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
}

.quote-card .author {
  text-align: right;
  font-size: 12px;
  color: #aaa;
}
</style>
