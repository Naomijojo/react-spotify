import axios from "axios"

export const myMusicApi = { 
  getTracks: async ( limit = 10) => {
    const [ recommendTracks, weekTracks, monthTracks, listensTotalTracks, listensWeekTracks, listensMonthTracks ] = await Promise.all([
      axios.get('https://api.jamendo.com/v3.0/tracks', {
        //測試換成https://api.jamendo.com/v3.0/artists/albums 但會發生沒有image情形
        params: {
          client_id: import.meta.env.VITE_CLIENT_ID,
          format: 'json',
          limit,
          search: 'relax',           // jamendoApi 自身的關鍵字搜索
          include: 'musicinfo+stats',
          audioformat: 'mp32',
          order: 'popularity_total', // 排序方式

          // https://api.jamendo.com/v3.0/artists/tracks 使用這個
          // order: 'track_name_desc', // 排序方式
          // name: 'we are fm',        // 印出的name好像是歌手名
        },
      }),
      axios.get('https://api.jamendo.com/v3.0/tracks', {
        params: {
          client_id: import.meta.env.VITE_CLIENT_ID,
          format: 'json',
          limit,
          search: 'jazz',
          include: 'musicinfo+stats',
          audioformat: 'mp32',
          order: 'popularity_week',
        },
      }),
      axios.get('https://api.jamendo.com/v3.0/tracks', {
        params: {
          client_id: import.meta.env.VITE_CLIENT_ID,
          format: 'json',
          limit,
          search: 'pop',
          include: 'musicinfo+stats',
          audioformat: 'mp32',
          order: 'popularity_month',
        },
      }),
      axios.get('https://api.jamendo.com/v3.0/tracks', {
        params: {
          client_id: import.meta.env.VITE_CLIENT_ID,
          format: 'json',
          limit,
          search: 'pop',
          include: 'musicinfo+stats',
          audioformat: 'mp32',
          order: 'listens_total',
        },
      }),
      axios.get('https://api.jamendo.com/v3.0/tracks', {
        params: {
          client_id: import.meta.env.VITE_CLIENT_ID,
          format: 'json',
          limit,
          search: 'dance',
          include: 'musicinfo+stats',
          audioformat: 'mp32',
          order: 'listens_week',
        },
      }),
      axios.get('https://api.jamendo.com/v3.0/tracks', {
        params: {
          client_id: import.meta.env.VITE_CLIENT_ID,
          format: 'json',
          limit,
          search: 'guitar',
          include: 'musicinfo+stats',
          audioformat: 'mp32',
          order: 'listens_month',
        },
      }),
    ]);
    // return data.results
    return {
      recommendedTracks: recommendTracks.data.results,
      weekTracks: weekTracks.data.results,
      monthTracks: monthTracks.data.results,
      listensTotalTracks: listensTotalTracks.data.results,
      listensWeekTracks: listensWeekTracks.data.results,
      listensMonthTracks: listensMonthTracks.data.results,
    }
  },
  getAlbum: async(albumId, artistName,  limit = 10) => {
    try {
      const response = await axios.get(`https://api.jamendo.com/v3.0/artists/tracks`, {
        params: {
          client_id: import.meta.env.VITE_CLIENT_ID,
          format: 'json',
          album_id: albumId,
          artist_name: artistName,
          limit
        },
      })
      return response.data.results
    } catch (error) {
      console.error('獲取專輯歌曲時錯誤:', error)
    }
  },
  getThemeTracks: async( tag, order = 'popularity_week', limit = 10) => {
    const { data } = await axios.get('https://api.jamendo.com/v3.0/tracks', {
      params: {
        client_id: import.meta.env.VITE_CLIENT_ID,
        format: 'json',
        tags: tag,
        limit,
        include: 'musicinfo+stats',
        order,
    }
  })
    return data.results
  },
  // jamendoAPI 的 artists 有 hasimage 參數 , 但就會變成拿不到專輯
  // Playlist 頁面：獲取歌手列表（歌手名、歌手照片）
  getArtists: async (limit = 20) => {
    try {
      const { data } = await axios.get('https://api.jamendo.com/v3.0/artists', {
        params: {
          client_id: import.meta.env.VITE_CLIENT_ID,
          format: 'json',
          limit,
          include: 'musicinfo+stats',
          order: 'popularity_total',
          hasimage: 1,
        },
      })
      return data.results
    } catch (error) {
      console.error('獲取歌手列表失敗:', error)
      return []
    }
  },
  // Artist 頁面：獲取歌手的歌曲（用於提取專輯）
  getArtistTracks: async (artistName, limit = 50) => {
    try {
      const { data } = await axios.get('https://api.jamendo.com/v3.0/tracks', {
        params: {
          client_id: import.meta.env.VITE_CLIENT_ID,
          format: 'json',
          search: artistName,
          limit,
          include: 'musicinfo+stats',
          audioformat: 'mp32',
          order: 'popularity_total',
        },
      })
      return data.results
    } catch (error) {
      console.error('獲取歌手歌曲失敗:', error)
      return []
    }
  },
  

}

/*
Jamendo API include 參數選項：
- musicinfo: 音樂信息（BPM、調性、音調等）
- stats: 統計信息（播放次數、收藏數等）
- licenses: 許可證信息 (版權、下載、分享、商業用途等)
- tags: 標籤信息
- genres: 流派信息
- coordinates: 地理坐標信息
- relations: 相關信息
- descriptions: 描述

組合使用示範：
- 'musicinfo+stats': 音樂信息和統計信息 (播放器功能)
- 'musicinfo+stats+tags': 音樂信息、統計信息和標籤 (搜索和分類)
- 'musicinfo+stats+licenses': 音樂信息、統計信息和許可證 (詳細信息頁面)
- 'musicinfo+stats+tags+genres': 音樂信息、統計信息、標籤和流派


*/