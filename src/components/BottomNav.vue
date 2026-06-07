<template>
  <nav class="bottom-nav">
    <router-link
      to="/"
      class="nav-item"
      :class="{ active: $route.path === '/' }"
    >
      <span>📖</span>
      <p>每日哲思</p>
    </router-link>

    <router-link
      to="/explorer"
      class="nav-item"
      :class="{ active: $route.path === '/explorer' }"
    >
      <span>🧠</span>
      <p>哲学探索</p>
    </router-link>

    <!-- 动态判断跳转目标 -->
    <div class="nav-item" :class="{ active: $route.path === '/user' || $route.path === '/login' }" @click="goUser">
      <span>👤</span>
      <p>个人中心</p>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goUser = () => {
  const user = localStorage.getItem('user');
  if (user) {
    router.push('/user');
  } else {
    router.push('/login');
  }
};
</script>


<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background: #000;
  border-top: 1px solid #333;
  padding: 10px 0;
  z-index: 1000;
}

.nav-item {
  color: #aaa;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
}

.nav-item.active {
  color: #4fc3f7;
}
</style>
