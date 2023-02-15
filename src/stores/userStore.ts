import { defineStore } from 'pinia'
import { userStorage } from '@/utils/storage'
import http from '@/api/index'
import {useRouter} from 'vue-router'



export default defineStore('userStore', () => {
  const router = useRouter();
  let userInfo = userStorage('userInfo', { name: '', token: '' ,role:'',portrait:''})

  function setUserInfo(data: any) {
    userInfo.value = data;
  }
  //登陆
  function login(data: any) {
     return http({
      method: "post",
      url: "/mock/login",
      data: data
    }).then((res) => {
      setUserInfo(res.data)
    })
  }

  //退出登陆

  function off(){
    setUserInfo({ name: '', token: '' });
    router.push({path:"/login"})
  }

  return { setUserInfo, login,off,userInfo }
})
