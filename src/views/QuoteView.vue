<template>
  <div class="quote-view">
    <h1 class="title">每日哲思</h1>
    <div class="quote-container">
      <p class="quote">生活是没有旁观者的</p>
      <small class="author">- 歌德</small>
    </div>
    <div class="date-container">
      <span class="date">June 10, 2025</span>
    </div>
    <button class="btn">查看更多</button>
  </div>
</template>

<script setup></script>

<style scoped>
.quote-view {
  padding: 20px;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
.quote-container {
  margin-bottom: 30px;
}
.quote {
  font-size: 32px;
  font-style: italic;
}
.author {
  font-size: 18px;
  color: #ccc;
}
.date-container {
  margin-bottom: 20px;
}
.date {
  font-size: 16px;
}
.btn {
  background-color: #444;
  color: white;
  padding: 8px 20px;
  font-size: 14px;
  border-radius: 999px;
  border: none;
}
</style>
