<template>
  <div class="explorer">
    <div class="bg-wave"></div>

    <h1 class="title">哲学探索</h1>

    <!-- 搜索栏 -->
    <div class="search-section">
      <div class="search-bar">
        <span class="icon">🔍</span>
        <input type="text" placeholder="搜索" />
      </div>
      <div class="filters">
        <button class="filter active">思想精选</button>
        <button class="tab" @click="goToMaster">哲学大师</button>
        <button class="tab1" @click="goToSchool">学派理念</button>
      </div>
    </div>

    <!-- 语录卡片 -->
    <div class="card-list">
      <div v-for="p in visibleList" :key="p.name" class="quote-card">
        <div class="quote-top">
          <i class="icon">“</i>
          <span class="badge">{{ p.name }}</span>
        </div>
        <p class="quote-en">{{ p.intro_en }}</p>
        <p class="quote-zh">{{ p.intro_zh }}</p>
        <p class="quote-author">- {{ p.name }}</p>
        <div class="action-row">
          <button class="action-btn" @click="copyQuote(p)">📋</button>
          <button class="action-btn" @click="shareQuote(p)">📤</button>
          <button
            class="action-btn"
            :class="{ liked: isFavorite(p.name) }"
            @click.stop="toggleFavorite(p.name)"
          >
            ❤️
          </button>
        </div>
      </div>
    </div>

    <!-- 查看更多 -->
    <button v-if="!noMore" @click="showMore" class="btn">查看更多</button>
    <p v-else class="no-more">没有更多内容了</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToMaster = () => {
  router.push({ name: "PhilosopherMaster" });
};
const goToSchool = () => {
  router.push({ name: "PhilosophySchool" });
};
const allPhilosophers = ref([
  {
    name: "马克思",
    intro_en: "Social life practical in nature.",
    intro_zh: "社会生活本质上是实践的。",
  },
  {
    name: "苏格拉底",
    intro_en: "The only thing I know is that I know nothing.",
    intro_zh: "我唯一知道的就是我一无所知。",
  },
  {
    name: "柏拉图",
    intro_en: "The greatest wealth is to live content with little.",
    intro_zh: "最大的财富是满足于简单生活。",
  },
  {
    name: "尼采",
    intro_en: "He who has a why to live can bear almost any how.",
    intro_zh: "知道生活为什么而活的人，就能忍受任何一种生活。",
  },
]);

const limit = ref(2);
const visibleList = computed(() => allPhilosophers.value.slice(0, limit.value));
const noMore = computed(() => limit.value >= allPhilosophers.value.length);
const showMore = () => {
  limit.value += 2;
};

// 收藏逻辑
const favorites = ref(JSON.parse(localStorage.getItem("favorites")) || []);
const isFavorite = (name) => favorites.value.includes(name);
const toggleFavorite = (name) => {
  if (isFavorite(name)) {
    favorites.value = favorites.value.filter((n) => n !== name);
  } else {
    favorites.value.push(name);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites.value));
};

// 操作函数
const copyQuote = (p) => {
  const text = `${p.intro_en}\n${p.intro_zh}\n—— ${p.name}`;
  navigator.clipboard.writeText(text);
  alert("已复制语录");
};

const shareQuote = (p) => {
  const text = `${p.intro_en}\n${p.intro_zh}\n—— ${p.name}`;
  if (navigator.share) {
    navigator.share({ title: "哲学语录", text });
  } else {
    navigator.clipboard.writeText(text);
    alert("已复制内容，可粘贴分享");
  }
};
</script>

<style scoped>
.explorer {
  position: relative;
  padding: 20px;
  background-color: #0d0d0d;
  color: white;
  font-family: "Georgia", serif;
  min-height: 100vh;
  overflow-x: hidden;
}

.bg-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://raw.githubusercontent.com/gnikoloff/wave-svg-backgrounds/main/wave-light-dark.svg");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.12;
  z-index: -1;
}

.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 12px;
}

.search-section {
  margin-bottom: 24px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 30px;
  padding: 8px 16px;
}

.search-bar input {
  flex: 1;
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  margin-left: 10px;
}

.search-bar .icon {
  color: #aaa;
}

.filters {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.filter {
  padding: 6px 16px;
  border-radius: 999px;
  background-color: transparent;
  border: 1px solid #888;
  color: white;
  font-size: 14px;
}
.tab {
  padding: 6px 16px;
  border-radius: 999px;
  background-color: transparent;
  border: 1px solid #888;
  color: white;
  font-size: 14px;
}
.tab1 {
  padding: 6px 16px;
  border-radius: 999px;
  background-color: transparent;
  border: 1px solid #888;
  color: white;
  font-size: 14px;
}
.filter.active {
  background-color: #fff;
  color: #000;
}

.card-list {
  margin-top: 16px;
}

.quote-card {
  background: linear-gradient(to bottom right, #2d2d2d, #1a1a1a);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.05);
}

.quote-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quote-top .icon {
  font-size: 22px;
  color: #ccc;
}

.badge {
  background-color: #666;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
}

.quote-en {
  font-style: italic;
  font-size: 16px;
  color: #ddd;
  margin: 16px 0 8px;
}

.quote-zh {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.quote-author {
  font-size: 14px;
  color: #aaa;
  text-align: right;
}

.action-row {
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
}

.action-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #ccc;
  cursor: pointer;
  transition: transform 0.2s;
}

.action-btn:hover {
  transform: scale(1.2);
  color: white;
}

.action-btn.liked {
  color: hotpink;
}

.btn {
  display: block;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #444;
  color: white;
  padding: 10px;
  font-size: 14px;
  border-radius: 999px;
  border: none;
}

.no-more {
  text-align: center;
  color: gray;
  margin-top: 12px;
}
</style>
