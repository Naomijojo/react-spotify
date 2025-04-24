import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// zustand: use開頭-名稱-Store結尾
export const useUserStore = create(
  persist( //persist=持久化設定 會存在storage裡(key & value)
    (set) => ({
      // token:使用者登入後的token
      token: '',
      setToken: (token) => set(() => ({ token })),
      
      // userInfo:使用者登入後的資料
      userInfo: {
        firstName: '',
      },
      setUserInfo: (info) => set( () => ({ userInfo: info}) ),
      
    }),
    {
      name:'user'
    }
  )
)
