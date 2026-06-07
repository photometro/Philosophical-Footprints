<template>
  <div class="master-page">
    <h1 class="title">哲学大师</h1>
    
    <div class="card" v-for="item in masters" :key="item.name" @click="goToDetail(item)">
      <div class="header">
        <img class="avatar" :src="item.avatar" alt="avatar" />
        <div>
          <p class="name">{{ item.name }}</p>
          <p class="years">{{ item.years }}</p>
        </div>
      </div>
      <p class="desc-en"><em>{{ item.description_en }}</em></p>
      <p class="desc">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const masters = [
  {
    name: '柏拉图',
    years: '427–347 BC',
    avatar: '/avatars/plato.png',
    description_en: 'Founder of idealism. Emphasized forms and introspection.',
    description: '理想主义的创立者，强调理念与内省。',
  },
  {
    name: '亚里士多德',
    years: '384–322 BC',
    avatar: '/avatars/aristotle.png',
    description_en: 'Founder of formal logic. Valued empirical observation.',
    description: '形式逻辑的创始人，重视经验与观察。',
  },
  {
    name: '康德',
    years: '1724–1804',
    avatar: '/avatars/kant.png',
    description_en: 'Proposed transcendental idealism.',
    description: '提出先验理想主义，对现代哲学产生深远影响。',
  },
];

const goToDetail = (item) => {
  router.push({
    name: 'PhilosopherDetail',
    params: { name: item.name }
  });
};
</script>

<style scoped>
.master-page {
  background-color: #0d0d0d;
  padding: 24px;
  min-height: 100vh;
  color: white;
  font-family: 'Georgia', serif;
  background-image: url('https://raw.githubusercontent.com/gnikoloff/wave-svg-backgrounds/main/wave-dark.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
}

.card {
  background: linear-gradient(to bottom right, #2d2d2d, #1a1a1a);
  padding: 16px;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-4px);
}

.header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-size: 18px;
  font-weight: bold;
}

.years {
  font-size: 14px;
  color: #aaa;
}

.desc-en {
  font-size: 14px;
  font-style: italic;
  color: #ccc;
  margin-bottom: 6px;
}

.desc {
  font-size: 14px;
  color: #ddd;
}
</style>
