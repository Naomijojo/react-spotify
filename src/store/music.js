import { create } from 'zustand';
import { persist } from 'zustand/middleware'; //允許將狀態存儲到瀏覽器的 localStorage 中，即使刷新頁面，狀態也能保留

export const useMusicStore = create(
  persist(
    (set, get) => ({
        // 儲存狀態
        // recommendTrack:[],
        // weekTracks: [],
        // 待播放歌曲清單(陣列)、當前播放歌曲、播放歌曲的索引、播放狀態(布林)
        trackList: [],
        currentTrack: null,
        currentIndex: 0,
        isPlaying: false,
        togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),  // 增加state取得全部狀態 並用!isPlaying控制是否播放
        favorites: [],
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

        // 切換播放清單
        setTrackList: (trackList) => set({ trackList }),
        // 切換歌曲時(更新狀態)
        playTrack: (index) => {
          const tracks = get().trackList // 從trackList中取得所有歌曲
          const track = tracks[index]    // 根據索引找到要播放的歌曲
          // 待播歌曲+播放狀態
          set({
            currentTrack: track,         // 更新 currentTrack 為這首歌
            currentIndex: index,         // 更新 currentIndex 為索引值
            isPlaying: true,             // 正在播放
          })
        },
        // 新增專輯清單到播放器
        setAlbumTracks: (albumTracks) => {
          set({
            trackList: albumTracks,       // 更新播放清單為專輯中的歌曲
            currentTrack: albumTracks[0], // 預設第一首
            currentIndex: 0, 
            isPlaying: true, 
            favorite: false,
          })
        },
        // 新增上下首切換
        nextTrack: () => {
          const { trackList, currentIndex } = get()
          const nextIndex = (currentIndex + 1) % trackList.length
          set({
            currentTrack: trackList[nextIndex],
            currentIndex: nextIndex,
            isPlaying: true
          })
        },
        prevTrack: () => {
          const { trackList, currentIndex } = get()
          const prevIndex = (currentIndex - 1 + trackList.length) % trackList.length
          set({
            currentTrack: trackList[prevIndex],
            currentIndex: prevIndex,
            isPlaying: true
          })
         }
      }), 
      { 
        name: 'music' 
      }
  )
)