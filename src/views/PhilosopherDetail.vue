<template>
  <transition name="slide-up">
    <div class="detail-page" @click.self="goBack">
      <div 
        class="glass-card"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div class="drag-bar" @click="goBack"></div>
        <h1 class="name">{{ philosopher.name }}</h1>
        <p class="years">{{ philosopher.years }}</p>
        <span class="en-name">{{ philosopher.enName }}</span>

        <div class="section">
          <h2 class="sub-title">简介</h2>
          <p class="intro-en">{{ philosopher.introEn }}</p>
          <p class="intro-zh">{{ philosopher.introZh }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();

const philosopherMap = {
  '苏格拉底': {
    name: '苏格拉底',
    years: '479 - 399',
    enName: 'Socrates',
    introEn: 'Socrates (Σωκράτης) was born in Athens...',
    introZh: '苏格拉底（Σωκράτης）约公元前469年出生于雅典...'
  },
  '笛卡尔': {
    name: '笛卡尔',
    years: '1596 - 1650',
    enName: 'Descartes',
    introEn: 'René Descartes was born in France...',
    introZh: '勒内·笛卡尔出生于法国...'
  }
};

const philosopher = philosopherMap[route.params.name] || {
  name: '未知',
  years: '--',
  enName: '',
  introEn: 'No information available.',
  introZh: '暂无信息。'
};

// 退出函数
const goBack = () => {
  router.back(); // 或者 router.push('/explore')
};

// 手势检测
const startY = ref(0);
const endY = ref(0);

const handleTouchStart = (e) => {
  startY.value = e.touches[0].clientY;
};
const handleTouchMove = (e) => {
  endY.value = e.touches[0].clientY;
};
const handleTouchEnd = () => {
  if (endY.value - startY.value > 50) {
    goBack(); // 下滑超出 50px 触发返回
  }
};
</script>

<style scoped>
.detail-page {
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #0d0d0d 40%, #111);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 12px;
}

/* 卡片主体 */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 30px 30px 0 0;
  padding: 24px;
  width: 100%;
  max-width: 600px;
  color: white;
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.4);
}

/* 顶部滑动条 */
.drag-bar {
  width: 60px;
  height: 6px;
  background: #444;
  border-radius: 3px;
  margin: 0 auto 20px;
}

.name {
  font-size: 24px;
  font-weight: bold;
}
.years {
  font-size: 14px;
  color: #999;
  margin-top: 6px;
}
.en-name {
  display: inline-block;
  margin-top: 8px;
  font-size: 13px;
  color: #ccc;
  background: #222;
  padding: 4px 12px;
  border-radius: 14px;
}

.section {
  margin-top: 24px;
}
.sub-title {
  font-size: 16px;
  color: #ccc;
  margin-bottom: 12px;
}
.intro-en {
  font-size: 15px;
  color: #aaa;
  margin-bottom: 10px;
  line-height: 1.6;
}
.intro-zh {
  font-size: 14px;
  color: #eee;
  line-height: 1.8;
  white-space: pre-wrap;
}

/* 动画 */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
