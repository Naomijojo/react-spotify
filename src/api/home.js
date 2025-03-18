

export const postApi = { // 2. 創建 postApi 物件放置 post 相關 api
  getAlbum: async() => { 
    const { data } = await axios.get('/mock/album')
    return data
  }
}