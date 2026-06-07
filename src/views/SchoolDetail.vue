<template>
  <transition name="slide-up">
    <div
      class="school-detail"
      :style="{ transform: `translateY(${translateY}px)` }"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div class="top-bar"></div>
      <div class="content">
        <h2 class="title">{{ school.name }}</h2>
        <p class="en-name">{{ school.enName }}</p>

        <div class="section">
          <h3>理念介绍</h3>
          <p class="desc-en">{{ school.enDesc }}</p>
          <p class="desc-zh">{{ school.zhDesc }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const startY = ref(0);
const translateY = ref(0);
const threshold = 100; // 返回触发距离阈值

const onTouchStart = (e) => {
  startY.value = e.touches[0].clientY;
};

const onTouchMove = (e) => {
  const deltaY = e.touches[0].clientY - startY.value;
  if (deltaY > 0) {
    translateY.value = deltaY;
  }
};

const onTouchEnd = () => {
  if (translateY.value > threshold) {
    router.back(); // 触发返回
  } else {
    translateY.value = 0; // 回弹
  }
};

// 示例数据
const schoolList = [
  {
    name: '斯宾诺莎学派',
    enName: 'The School of Spinoza',
    enDesc: 'The School of Spinoza is named after the philosopher Baruch Spinoza. It emphasizes rationalism, monism, and pantheism.',
    zhDesc: '斯宾诺莎学派以 17 世纪荷兰哲学家巴鲁赫·斯宾诺莎命名，主张理性主义、一元论和泛神论思想。'
  },
  {
    name: '黑格尔唯心主义',
    enName: 'Hegelian idealism',
    enDesc: 'Hegel’s idealism belongs to absolute idealism, which believes that reality is ultimately the manifestation of the absolute idea.',
    zhDesc: '黑格尔的唯心主义属于绝对唯心主义，认为现实最终是绝对理念的体现。'
  }
];

const school = schoolList.find(item => item.name === route.params.name) || {
  name: '未知学派',
  enName: 'Unknown',
  enDesc: 'No data available',
  zhDesc: '暂无数据'
};
</script>

<style scoped>
.school-detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(20px);
  color: white;
  overflow-y: auto;
  border-radius: 20px 20px 0 0;
  padding-top: 20px;
  z-index: 9999;
  transition: transform 0.25s ease;
  will-change: transform;
}

.top-bar {
  width: 80px;
  height: 6px;
  background-color: white;
  opacity: 0.3;
  border-radius: 3px;
  margin: 0 auto 20px;
}

.content {
  padding: 20px;
}

.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 4px;
  text-align: center;
}

.en-name {
  font-size: 14px;
  color: #ccc;
  text-align: center;
  margin-bottom: 24px;
}

.section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.desc-en {
  font-style: italic;
  margin-bottom: 10px;
  color: #ddd;
}

.desc-zh {
  line-height: 1.6;
  color: #fff;
}

/* 动画 */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.slide-up-enter-from {
  transform: translateY(100%) scale(0.95);
  opacity: 0;
}

.slide-up-enter-to {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.slide-up-leave-from {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.slide-up-leave-to {
  transform: translateY(100%) scale(0.95);
  opacity: 0;
}
</style>
