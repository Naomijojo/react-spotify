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
          // name: 'we are fm', // 印出的name好像是歌手名
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
}