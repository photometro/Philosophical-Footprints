const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// 启用 CORS，允许跨域请求
app.use(cors());
app.use(express.json());

// 模拟数据 - 名言库
const quotes = [
  {
    id: 1,
    content: "人的本质并不是单个人所固有的抽象物，在其现实性上，它是一切社会关系的总和。",
    author: "卡尔·马克思",
    category: "马克思主义",
    likes: 124,
    favorites: 42,
    createdAt: "2023-01-15"
  },
  {
    id: 2,
    content: "世界是一团永恒的活火。",
    author: "赫拉克利特",
    category: "古希腊哲学",
    likes: 98,
    favorites: 36,
    createdAt: "2023-01-16"
  },
  {
    id: 3,
    content: "存在即合理。",
    author: "黑格尔",
    category: "德国古典哲学",
    likes: 145,
    favorites: 53,
    createdAt: "2023-01-17"
  },
  // 更多名言...
];

// 模拟数据 - 分类
const categories = [
  { id: 1, name: "马克思主义", quoteCount: 12 },
  { id: 2, name: "古希腊哲学", quoteCount: 18 },
  { id: 3, name: "德国古典哲学", quoteCount: 9 },
  { id: 4, name: "中国哲学", quoteCount: 15 },
];

// 模拟数据 - 哲学家
const philosophers = [
  { id: 1, name: "卡尔·马克思", country: "德国", quotes: [1, 10, 15] },
  { id: 2, name: "弗里德里希·恩格斯", country: "德国", quotes: [2, 8, 12] },
  { id: 3, name: "弗拉基米尔·列宁", country: "俄国", quotes: [5, 7] },
];

// ============= API 路由 =============

// 获取所有名言
app.get('/api/philosophy/quotes', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const paginatedQuotes = quotes.slice(startIndex, endIndex);
  res.json({
    data: paginatedQuotes,
    total: quotes.length,
    page,
    limit
  });
});

// 根据分类获取名言
app.get('/api/philosophy/categories/:categoryId/quotes', (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  
  // 筛选属于该分类的名言
  const categoryQuotes = quotes.filter(
    (quote) => quote.category === categories.find(cat => cat.id === categoryId)?.name
  );
  
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  res.json({
    data: categoryQuotes.slice(startIndex, endIndex),
    total: categoryQuotes.length,
    page,
    limit
  });
});

// 获取单个名言
app.get('/api/philosophy/quotes/:id', (req, res) => {
  const quoteId = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === quoteId);
  
  if (!quote) {
    return res.status(404).json({ error: "名言不存在" });
  }
  
  res.json(quote);
});

// 获取随机名言
app.get('/api/philosophy/quotes/random', (req, res) => {
  const count = parseInt(req.query.count) || 1;
  const randomQuotes = [];
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    randomQuotes.push(quotes[randomIndex]);
  }
  
  res.json(randomQuotes);
});

// 获取所有分类
app.get('/api/philosophy/categories', (req, res) => {
  res.json(categories);
});

// 获取所有哲学家
app.get('/api/philosophy/philosophers', (req, res) => {
  res.json(philosophers);
});

// 点赞名言
app.post('/api/philosophy/quotes/:id/like', (req, res) => {
  const quoteId = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === quoteId);
  
  if (!quote) {
    return res.status(404).json({ error: "名言不存在" });
  }
  
  // 模拟点赞/取消点赞
  quote.likes = req.body.isLiked ? quote.likes + 1 : quote.likes - 1;
  res.json(quote);
});

// 收藏名言
app.post('/api/philosophy/quotes/:id/favorite', (req, res) => {
  const quoteId = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === quoteId);
  
  if (!quote) {
    return res.status(404).json({ error: "名言不存在" });
  }
  
  // 模拟收藏/取消收藏
  quote.favorites = req.body.isFavorite ? quote.favorites + 1 : quote.favorites - 1;
  res.json(quote);
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});