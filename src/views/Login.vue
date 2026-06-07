<template>
  <div class="login">
    <h1 class="title">登录</h1>

    <div class="form-group">
      <label for="phone">手机号</label>
      <input v-model="phone" type="text" id="phone" class="input" placeholder="请输入手机号" />
    </div>

    <div class="form-group">
      <label for="password">密码</label>
      <input v-model="password" type="password" id="password" class="input" placeholder="请输入密码" />
    </div>

    <button class="btn" @click="handleLogin">登录</button>
    <p class="link" @click="$router.push('/register')">没有账号？去注册</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const phone = ref('');
const password = ref('');

const handleLogin = () => {
  if (phone.value && password.value) {
    localStorage.setItem('user', JSON.stringify({ phone: phone.value }));
    alert('登录成功！');
    window.location.href = '/';
  } else {
    alert('请输入手机号和密码');
  }
};
</script>

<style scoped>
.login {
  padding: 20px;
  background-color: #1a1a1a;
  color: white;
  min-height: 100vh;
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 20px;
}
label {
  font-size: 14px;
  margin-bottom: 5px;
}
.input {
  width: 100%;
  padding: 12px;
  background-color: #2a2a2a;
  color: white;
  border: none;
  border-radius: 8px;
}
.btn {
  background-color: #4fc3f7;
  color: white;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
}
.link {
  margin-top: 20px;
  color: #4fc3f7;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
}
</style>
