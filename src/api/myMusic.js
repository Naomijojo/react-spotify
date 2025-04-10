import axios from "axios"

export const myMusicApi = { 
  getRecommendTracks: async(order='popularity_total', limit = 10) => {
    const { data } = await axios.get('https://api.jamendo.com/v3.0/tracks', {
      params: {
        client_id: import.meta.env.VITE_CLIENT_ID,
        format: 'json',
        limit,
        search:'relax',
        include: 'musicinfo+stats',
        audioformat: 'mp32',
        order,
      }
    })
    return data.results
  },
  getWeekTracks: async(order='popularity_week', limit = 10) => {
    const { data } = await axios.get('https://api.jamendo.com/v3.0/albums', {
      params: {
        client_id: import.meta.env.VITE_CLIENT_ID,
        format: 'json',
        limit,
        search:'relax',
        include: 'musicinfo+stats',
        audioformat: 'mp32',
        order,
      }
    })
    return data.results
  },
  getAlbum: async(albumId, artistName,  limit = 10) => {
    const { data } = await axios.get('https://api.jamendo.com/v3.0/albums/tracks', {
      params: {
        client_id: import.meta.env.VITE_CLIENT_ID,
        format: 'json',
        album_id: albumId,
        artist_name: artistName,
        limit
    }
  })
    return data.results
  },
}