<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" label-width="80px" class="login-form">
      <el-form-item label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password" />
      </el-form-item>
      <div class="button-container">
        <el-button type="primary" @click="login" class="center-button">登录</el-button>
        <el-button type="primary" @click="login2">跳过</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import { useRouter } from '#app'

const formRef = ref(null)
const form = ref({
  username: '',
  password: '',
})

const router = useRouter()

const login = () => {
  // 在此处添加登录逻辑
  if (form.value.username === '123456') {
    if (form.value.password === '123456') {
      // 更新权限
      router.push('/souye')
    } else {
      alert('密码错误')
    }
  } else {
    alert('账户错误')
  }
}

const login2 = () => {
  // 参照权限

  router.push('/souye')
}
</script>

<style scoped lang="scss">
.login-container {
  width: 400px;
  height: 140px;
  margin: 200px auto;
  padding: 20px;
  background-color: #99fcce;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form {
  width: 80%;
  margin: 0 auto;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.center-button {
  margin: 0 auto;
}
</style>
