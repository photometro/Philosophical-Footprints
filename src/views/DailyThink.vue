<template>
  <div class="daily-page">
    <div class="bg-wave"></div>

    <div class="content-container">
      <h1 class="logo">Philotrace <span class="subtitle">每日哲思</span></h1>
      <p class="date">{{ selectedDate }}</p>

      <div class="date-selector">
        <div
          v-for="(date, index) in dates"
          :key="index"
          :class="['date-item', selectedIndex === index ? 'active' : '']"
          @click="selectDate(index)"
        >
          {{ date }}
        </div>
      </div>

      <div class="quote-card">
        <p class="quote-en">{{ currentQuote.en }}</p>
        <p class="quote-zh">{{ currentQuote.zh }}</p>
        <p class="quote-author">- {{ currentQuote.author }}</p>

        <div class="action-row">
          <button class="action-btn" @click="copyQuote">📋</button>
          <button class="action-btn" @click="shareQuote">📤</button>
          <button class="action-btn" :class="{ liked: isLiked }" @click="toggleLike">❤️</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from "vue";

const dates = ["10", "11", "12", "13", "14", "15"];
const selectedIndex = ref(0);

const quotes = [
  {
    date: "10",
    en: "Life is not a spectacle.",
    zh: "生活是没有旁观者的",
    author: "歌德",
  },
  {
    date: "11",
    en: "There is no world without contradictions",
    zh: "没有矛盾就没有世界",
    author: "毛泽东",
  },
  {
    date: "12",
    en: "The only thing I know is that I know nothing.",
    zh: "我唯一知道的就是我一无所知",
    author: "苏格拉底",
  },
  {
    date: "13",
    en: "Man is condemned to be free.",
    zh: "人注定要自由",
    author: "萨特",
  },
  {
    date: "14",
    en: "To be is to be perceived.",
    zh: "存在即被感知",
    author: "乔治·贝克莱",
  },
  {
    date: "15",
    en: "I think, therefore I am.",
    zh: "我思故我在",
    author: "笛卡尔",
  },
];

const selectDate = (index) => {
  selectedIndex.value = index;
};

const currentQuote = computed(() => quotes[selectedIndex.value]);
const selectedDate = computed(
  () => `June ${quotes[selectedIndex.value].date}, 2025`
);

const likedDates = ref(JSON.parse(localStorage.getItem("likedDates") || "[]"));

const isLiked = computed(() =>
  likedDates.value.includes(dates[selectedIndex.value])
);

const toggleLike = () => {
  const date = dates[selectedIndex.value];
  if (likedDates.value.includes(date)) {
    likedDates.value = likedDates.value.filter((d) => d !== date);
  } else {
    likedDates.value.push(date);
  }
  localStorage.setItem("likedDates", JSON.stringify(likedDates.value));
};

const copyQuote = async () => {
  const text = `${currentQuote.value.en}\n${currentQuote.value.zh}\n—— ${currentQuote.value.author}`;
  try {
    await navigator.clipboard.writeText(text);
    alert("已复制语录");
  } catch (err) {
    alert("复制失败");
  }
};

const shareQuote = () => {
  const text = `${currentQuote.value.en}\n${currentQuote.value.zh}\n—— ${currentQuote.value.author}`;
  if (navigator.share) {
    navigator.share({
      title: "每日哲思",
      text: text,
    });
  } else {
    navigator.clipboard.writeText(text);
    alert("已复制内容，可粘贴分享");
  }
};
</script>

<style scoped>
.daily-page {
  position: relative;
  min-height: 100vh;
  background-color: #0d0d0d;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
}

.bg-wave {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url('https://raw.githubusercontent.com/gnikoloff/wave-svg-backgrounds/main/wave-light-dark.svg') no-repeat center/cover;
  opacity: 0.1;
}

.content-container {
  z-index: 1;
  position: relative;
  max-width: 420px;
  margin: 0 auto;
  text-align: center;
  padding-top: 32px;
}

.logo {
  font-family: 'Georgia', serif;
  font-style: italic;
  font-weight: bold;
  font-size: 28px;
  color: white;
}

.subtitle {
  font-style: normal;
  font-size: 16px;
  color: #ccc;
  margin-left: 8px;
}

.date {
  font-style: italic;
  font-size: 14px;
  color: #ccc;
  margin: 12px 0;
}

.date-selector {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}

.date-item {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #888;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.date-item.active {
  background-color: #aaa;
  color: black;
}

.quote-card {
  background: linear-gradient(to bottom right, #2d2d2d, #1a1a1a);
  border-radius: 20px;
  padding: 24px;
  margin-top: 16px;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.05);
  font-family: 'Georgia', serif;
}

.quote-en {
  font-size: 14px;
  font-style: italic;
  color: #ddd;
  margin-bottom: 8px;
}

.quote-zh {
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}

.quote-author {
  font-size: 13px;
  color: #aaa;
}

.action-row {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 32px;
}

.action-btn {
  background: none;
  border: none;
  font-size: 22px;
  color: #ccc;
  cursor: pointer;
}

.action-btn:hover {
  color: white;
  transform: scale(1.1);
}

.action-btn.liked {
  color: hotpink;
}
</style>