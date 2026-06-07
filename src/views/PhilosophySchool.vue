<template>
  <div class="philosophy-school">
    <h1 class="title">哲学学派</h1>
    <div class="tabs">
      <button class="tab active">学派理念</button>
    </div>

    <div class="card-list">
      <div 
        v-for="school in visibleList" 
        :key="school.name" 
        class="card"
        @click="goToDetail(school)"
      >
        <div class="card-content">
          <h2 class="name">{{ school.name }}</h2>
          <p class="intro">{{ school.intro }}</p>
        </div>
      </div>
    </div>

    <button v-if="!noMore" @click="showMore" class="btn">查看更多</button>
    <p v-else style="text-align: center; color: gray;">没有更多内容了</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const allSchools = ref([
  { name: '斯宾诺莎学派', intro: 'The School of Spinoza is named after the philosopher...', description: '详细介绍...' },
  { name: '黑格尔唯心主义', intro: 'Hegelian idealism belongs to absolute idealism...', description: '详细介绍...' },
]);

const limit = ref(2);
const showMore = () => {
  if (limit.value < allSchools.value.length) {
    limit.value += 2;
  }
};

const visibleList = computed(() => allSchools.value.slice(0, limit.value));
const noMore = computed(() => limit.value >= allSchools.value.length);

const goToDetail = (school) => {
  router.push({ name: 'SchoolDetail', params: { name: school.name } });
};
</script>

<style scoped>
.philosophy-school {
  padding: 20px;
  background-color: #1a1a1a;
  color: white;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.tab {
  padding: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid #444;
  border-radius: 999px;
}

.tab.active {
  background-color: #444;
  color: white;
}

.card-list {
  margin-bottom: 20px;
}

.card {
  background-color: #2a2a2a;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card:hover {
  transform: scale(1.05);
  background-color: #333;
}

.card-content {
  width: 100%;
}

.name {
  font-size: 20px;
  font-weight: bold;
}

.intro {
  font-size: 14px;
  color: #bbb;
}

.btn {
  background-color: #444;
  color: white;
  padding: 8px 20px;
  font-size: 14px;
  border-radius: 999px;
  border: none;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: #777;
}

/* 动画效果 */
.card {
  position: relative;
  transform: rotateY(0deg);
  animation: bounce 0.5s ease-out;
}

@keyframes bounce {
  0% { transform: rotateY(0deg) scale(0.8); }
  50% { transform: rotateY(10deg) scale(1.05); }
  100% { transform: rotateY(0deg) scale(1); }
}
</style>
