import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
	  (set) => ({
		   // 狀態
		   language: 'zh_TW',
		   setLanguage: (language) => set(() => ({ language })),
		 }), 
		 { 
			 // 持久化設定
			 name: 'user' // 默認將全局狀態儲存在 localStorage，name的屬性值是儲存的 key 名
		 }
	)
)