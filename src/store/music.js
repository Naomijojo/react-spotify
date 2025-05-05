import { create } from 'zustand';
import { persist } from 'zustand/middleware'; //允許將狀態存儲到瀏覽器的 localStorage 中，即使刷新頁面，狀態也能保留

export const useMusicStore = create(
  persist(
    (set, get) => ({
        // 1.先儲存現有狀態
        
        // 三種播放模式 : 依序(預設)、隨機、重複
        playMode: 'sequential', //sequential,random,repeat
        trackList: [],          //播放清單管理：待播放歌曲清單
        currentTrack: null,     //播放控制：當前播放歌曲(未選擇歌曲)
        currentIndex: 0,        //播放控制：當前播放歌曲索引
        progress: 0,            //進度條控制：播放進度
        duration: 0,            //進度條控制：歌曲總長度
        isPlaying: false,       //是否正在播放
        favorites: [],          //收藏控制

        setPlayMode: (mode) => set({ playMode: mode }),
        setCurrentTrack: (track) => set({ currentTrack: track }),
        setIsPlaying: (value) => set({ isPlaying: value }),
        updateProgress: (progress, duration) => set({ progress, duration }),
        togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),  // 增加state取得全部狀態 並用!isPlaying控制是否播放
        toggleFavorite: (track) => {
          // 查看當前歌曲是復否已收藏：some遍歷favorites陣列 
          const hasFavorite = get().favorites.some(item => item.id === track.id)
          // 更新函數：使用set(更新zustand狀態)+state(獲取當前狀態值)
          if(hasFavorite){
            // 如已收藏->需移除：使用filter過濾favorites陣列中與track.id相同的歌 更新favorites陣列來將歌移除
            set(state => ({ favorites: state.favorites.filter(item => item.id !== track.id) }))
          } else {
            // 如為收藏->需收藏：使用展開運算符 保留原本已收藏歌曲 把新的track加入陣列並更新favorites陣列來加入收藏
            set(state => ({ favorites: [ ...state.favorites, track ] }))
          }
        },

        // 2.切換播放清單
        setTrackList: (trackList) => set({ trackList }),
        // 3.切換歌曲時(更新狀態)
        playTrack: (index) => {
          const tracks = get().trackList // 從trackList中取得所有歌曲
          const track = tracks[index]    // 根據索引找到要播放的歌曲
          
          // 只有在選擇的曲目跟當前曲目不同時 才更新播放狀態 (才不會重疊播放音樂)
          if (track) {
            // 如果有正在播放的曲目，先停止當前曲目
            if (get().isPlaying) {
              set({ isPlaying: false }) 
            }
            // 更新當前曲目和狀態
            set({
              currentTrack: track,         // 更新 currentTrack 為這首歌
              currentIndex: index,         // 更新 currentIndex 為索引值
              isPlaying: true,             // 正在播放
            });
          }
        },
        
        // 4.新增專輯清單到播放器
        setAlbumTracks: (albumTracks) => {
          set({
            trackList: albumTracks,       // 更新播放清單為專輯中的歌曲
            currentTrack: albumTracks[0], // 預設第一首
            currentIndex: 0, 
            isPlaying: true, 
          })
        },
        // 5.下一首切換 
        nextTrack: () => {
          const { trackList, currentIndex, playMode } = get()
          let nextIndex
          if (playMode === 'random') {
            nextIndex = Math.floor(Math.random() * trackList.length)  // 隨機:Math.random()*trackList的10首歌曲 印出隨機的1-9
          } else {
            nextIndex = (currentIndex + 1) % trackList.length
          }
          set({
            currentTrack: trackList[nextIndex],
            currentIndex: nextIndex,
            isPlaying: true
          })
        },
        // 6.上一首切換 
        prevTrack: () => {
          const { trackList, currentIndex, playMode } = get()
          let prevIndex
          if (playMode === 'random'){
            prevIndex = Math.floor(Math.random() * trackList.length)
          } else {
            prevIndex = (currentIndex - 1 + trackList.length) % trackList.length
          }
          set({
            currentTrack: trackList[prevIndex],
            currentIndex: prevIndex,
            isPlaying: true
          })
         }
      }), 
      { 
        name: 'music',
        // 持久化儲存：只保留需要在頁面重新載入後保留的狀態部分
        partialize: (state) => ({
          favorites: state.favorites,
          currentTrack: state.currentTrack,
          currentIndex: state.currentIndex,
          trackList: state.trackList
        })
      }
  )
)