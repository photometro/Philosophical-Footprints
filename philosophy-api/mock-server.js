// 1. 引入依赖
const express = require('express');
const app = express();
const port = 3000; // 端口号，和前端请求保持一致（如 http://localhost:3000）

// 2. 解析 JSON 请求体（必备，否则拿不到请求参数）
app.use(express.json());

// 3. 模拟接口：获取相关名言
app.get('/api/philosophy/quotes/:id/related', (req, res) => {
  // 从 URL 中拿到名言 ID
  const quoteId = req.params.id; 

  // 模拟返回的相关名言数据（可根据需求扩展）
  const relatedQuotes = [
    { 
      id: 101, 
      text: "人的本质并不是单个人所固有的抽象物，在其现实性上，它是一切社会关系的总和。", 
      author: "马克思",
      categories: [{ id: 1, name: "哲学" }],
      views: 500,
      favorites: 100
    },
    { 
      id: 102, 
      text: "哲学家们只是用不同的方式解释世界，问题在于改变世界。", 
      author: "马克思",
      categories: [{ id: 1, name: "哲学" }],
      views: 600,
      favorites: 120
    },
    { 
      id: 103, 
      text: "自由是对必然的认识和对客观世界的改造。", 
      author: "恩格斯",
      categories: [{ id: 1, name: "哲学" }],
      views: 400,
      favorites: 80
    }
  ];

  // 返回数据给前端
  res.json(relatedQuotes);
});

// 4. 启动服务器
app.listen(port, () => {
  console.log(`Mock 服务器已启动：http://localhost:${port}`);
  console.log(`访问示例：http://localhost:${port}/api/philosophy/quotes/2/related`);
});