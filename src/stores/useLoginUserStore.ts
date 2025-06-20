import { ref } from 'vue'
import { defineStore } from 'pinia'
// import { getCurrentUser } from '@/api/user'

interface LoginUser {
  userName: string
  id?: number
}

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<LoginUser>({
    userName: '未登录',
  })

  async function fetchLoginUser() {
    // const res = await getLoginUserUsingGet()
    // if (res.data.code === 0 && res.data.data) {
    //   loginUser.value = res.data.data
    // }
    // setTimeout(() => {
    //   loginUser.value = { userName: '测试用户', id: 1 }
    // }, 3000)
  }

  function setLoginUser(newLoginUser: LoginUser) {
    loginUser.value = newLoginUser
  }

  return { loginUser, fetchLoginUser, setLoginUser }
})
