import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export const useMusicStore = create(
  persist(
    (set, get) => ({
      // ==================== 定義狀態 ====================
      
      // 播放狀態
      isPlaying: false,      
      currentTrack: null,     
      currentIndex: 0,        
      // 播放清單狀態
      trackList: [],          
      playMode: 'sequential', // 播放模式：sequential(依序)、random(隨機)、repeat(重複)
      // 播放進度
      progress: 0,            // 播放進度(秒)
      duration: 0,            // 歌曲總長度(秒)
      // 收藏
      favorites: [],          // 收藏的歌曲列表
      // 全局
      audioRef: null,        

      // =================== set方法 =====================
      
      setIsPlaying: (value) => set({ isPlaying: value }),
      setCurrentTrack: (track) => set({ currentTrack: track }),
      setTrackList: (trackList) => set({ trackList }),
      setPlayMode: (mode) => set({ playMode: mode }),
      updateProgress: (progress, duration) => set({ progress, duration }),
      setAudioRef: (ref) => set({ audioRef: ref }),

      // ==================== 播放控制 ====================
      
      // 播放/暫停切換
      togglePlaying: () => {
        const { audioRef, isPlaying } = get()
        if (audioRef) {
          if (isPlaying) {
            audioRef.pause()
            set({ isPlaying: false })
          } else {
            audioRef.play().catch((error) => {
              console.error('播放失敗:', error)
            })
            set({ isPlaying: true })
          }
        } else {
          // 如果沒有audioRef，只切換狀態
          set({ isPlaying: !isPlaying })
        }
      },
      // 播放
      play: () => {
        const { audioRef } = get()
        if (audioRef) {
          audioRef.play()
            .then(()=>{
              console.log('audioRef',audioRef)
              console.log('播放成功')
              set({ isPlaying: true })
            })
            .catch((error) => {
              console.error('播放失敗(音源失效):', error)
            })
        }
      },
      // 暫停
      pause: () => {
        const { audioRef } = get()
        if (audioRef) {
          audioRef.pause()
          set({ isPlaying: false })
        }
      },
      // 設置播放時間
      setCurrentTime: (time) => {
        const { audioRef } = get()
        //console.log('Time',audioRef.currentTime)   // 印出查看：HTMLAudioElement >> currentTime=取得、設定當前播放秒數(sec)
        //console.log('duration',audioRef.duration)  // 印出查看：歌曲總時長
        if (audioRef) {
          audioRef.currentTime = time
          set({ progress: time })
        }
      },

      // ==================== 播放索引、上下首切換 ====================
      
      // 播放索引的歌曲
      playTrack: (index) => {
        const { trackList } = get()
        const track = trackList[index]
        
        // 解決重疊播放：如果歌曲存在，要先暫停當前播放，並更新當前歌曲狀態和進度條為0
        if (track) {
          get().pause()
          set({
            currentTrack: track,
            currentIndex: index,
            isPlaying: true,
            progress: 0,
            duration: 0
          })
          // 更新完再開始播放新歌曲
          setTimeout(() => {
            get().play()
          }, 100)
        }
      },
      // 切下一首
      nextTrack: () => {
        const { trackList, currentIndex, playMode } = get()
        if (trackList.length === 0) return
        
        let nextIndex
        if (playMode === 'random') {
          nextIndex = Math.floor(Math.random() * trackList.length)
        } else {
          nextIndex = (currentIndex + 1) % trackList.length
        }
        get().playTrack(nextIndex)
      },
      // 切上一首
      prevTrack: () => {
        const { trackList, currentIndex, playMode } = get()
        if (trackList.length === 0) return
        
        let prevIndex
        if (playMode === 'random') {
          prevIndex = Math.floor(Math.random() * trackList.length)
        } else {
          prevIndex = (currentIndex - 1 + trackList.length) % trackList.length
        }
        get().playTrack(prevIndex)
      },


      
      // ==================== 收藏管理 ====================
      
      // 切換收藏狀態
      toggleFavorite: (track) => {
        const { favorites } = get()
        const hasFavorite = favorites.some(item => item.id === track.id)
        
        if (hasFavorite) {
          // 有 -> 移除收藏
          set(state => ({ 
            favorites: state.favorites.filter(item => item.id !== track.id) 
          }))
        } else {
          // 沒有 -> 添加收藏
          set(state => ({ 
            favorites: [...state.favorites, track] 
          }))
        }
      }
      
    }), 
    { 
      name: 'music',
      // 持久化儲存：只保留需要在頁面重新載入後保留的狀態部分
      partialize: (state) => ({
        favorites: state.favorites,
        currentTrack: state.currentTrack,
        currentIndex: state.currentIndex,
        trackList: state.trackList,
        playMode: state.playMode
      })
    }
  )
)