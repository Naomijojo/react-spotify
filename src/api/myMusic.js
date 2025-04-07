import axios from "axios"

export const myMusicApi = { 
  getPlayList: async() => { 
    const { data } = await axios.get('/mock/playlist')
    return data
  }
}