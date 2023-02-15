<template>
  <div class="login-page center">
    <div class="form">
      <div class="label">login</div>
      <ElForm :model="form" :rules="rules" ref="refForm">
        <ElFormItem prop="account">
          <ElInput v-model="form.account" placeholder="请输入账号" style="height:40px;">
            <template #prefix>
              <ElIcon class="el-input__icon">
                <User />
              </ElIcon>
            </template>
          </ElInput>
        </ElFormItem>
        <ElFormItem prop="password" v-loading="loading">
          <ElInput v-model="form.password" type="password" placeholder="请输入密码" style="height:40px;" :show-password="true" @keyup.enter="onLogin">
            <template #prefix>
              <ElIcon class="el-input__icon">
                <Lock />
              </ElIcon>
            </template>
          </ElInput>
        </ElFormItem>
      </ElForm>
      <div class="center">
        <ElButton type="primary" @click="onLogin" color="#626aef" size="large" style="width:100%;margin-top:20px;">GO</ElButton>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
import { type FormRules, type FormInstance, ElForm, ElFormItem, ElButton } from 'element-plus';
import UserStore from '@/stores/userStore';
import {useRouter} from 'vue-router'


const router = useRouter();
const form = reactive({
  account: '',
  password: '',
})
const rules = reactive<FormRules>({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
})
const refForm = ref<FormInstance>()
let loading = ref(false)
let userStore = UserStore()

function onLogin() {
  if (!refForm.value) return
  refForm.value.validate().then(() => {
    loading.value = true;
    userStore.login(form).then(()=>{
      router.push({path:"/home"})
    })
    .catch(() => {
      loading.value = false;
    })
  })
}
</script>

<style scoped lang='scss'>
.login-page {
  width: 100%;
  height: 100%;
  background: rgba(252, 252, 252, 0.846);
}

.form {
  width: 350px;
  height: 400px;
  // border: 1px solid #ccc;
  padding: 20px 40px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 20px #ccc
}

.label {
  width: 100%;
  margin: 10px 0px 20px 0px;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 10px;
  color: rgb(101, 150, 194);
  text-shadow: 2px 2px 4px rgb(181, 181, 181);
}
</style>