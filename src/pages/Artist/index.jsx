import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMusicStore } from "@/store/music";
import { myMusicApi } from "@/api/myMusic";
import { Loading } from '@/components';


const Artist = () => {
  const [ artistName, setArtistName ] = useState('');
  const [ artistAlbums, setArtistAlbums ] = useState([]); 
  const [ artistImage, setArtistImage ] = useState('');   //需使用從 playlist 頁面傳遞過來的歌手照
  const [ loading, setLoading ] = useState(false);        
  const [ searchParams ] = useSearchParams();

  const name = searchParams.get('name');
  const { 
    trackList, 
    currentTrack, 
    isPlaying, 
    togglePlaying,
    nextTrack,
    prevTrack,
    setTrackList,
    playTrack
  } = useMusicStore()


  useEffect(() => {
    if (!name) return
    setArtistName(name)
    
    // (傳遞歌手image參數)：用useSearchParams 從 playlist拿 URL 參數給 artist頁面
    const imageUrl = searchParams.get('image')
    if (imageUrl) {
      setArtistImage(decodeURIComponent(imageUrl))
    }
    
    // 拿歌手的歌 -> 提取專輯照
    const getArtistTracks = async () => {
      setLoading(true) // 開始載入
      try {
        const tracks = await myMusicApi.getArtistTracks(name, 50)
        if (tracks && tracks.length > 0) {
          console.log('tracks專輯',tracks)
          console.log('看第0筆的完整資料:', tracks[0])
          setTrackList(tracks)
          playTrack(0) // 播放第一首歌
        }
      } catch (error) {
        console.error('獲取歌手歌曲失敗:', error)
      } finally {
        setLoading(false) // 結束載入
      }
    }
    
    getArtistTracks()
  }, [name, searchParams, setTrackList, playTrack])
  
  useEffect(() => {
    // 會有重複的專輯資料出現：從歌手的歌曲中提取專輯資料,過濾出有專輯的歌曲,再將專輯名稱和圖片提取出來
    // const albums = trackList.filter(track => track.album_name).map(track => ({
    //   name: track.album_name,
    //   image: track.album_image
    // }))
    // setArtistAlbums(albums)

    // 避免重複專輯: 使用陣列去重
    const seenAlbums = []       // 記錄已看過的專輯
    const noRepeatAlbums = []   // 儲存不重複的專輯
    
    trackList.forEach(track => {
      // 條件：如果這首歌有專輯名稱，且沒看過這個專輯
      if (track.album_name && !seenAlbums.includes(track.album_name)) {
        // 檢查記錄這個專輯名稱，避免重複
        seenAlbums.push(track.album_name)
        // 儲存：再把將被跳過的專輯資料(去重)push進noRepeatAlbums
        noRepeatAlbums.push({
          name: track.album_name,
          image: track.album_image
        })
      }
    })
    setArtistAlbums(noRepeatAlbums)
  }, [trackList])


  if(loading) return <Loading/>
  return (
    <div className="pt-[72px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex justify-center">
            {artistImage ? (
              <img 
                className="w-48 h-48 rounded-full object-cover shadow-lg" 
                src={artistImage} 
                alt="artist"
              />
            ):(
              <div className="w-48 h-48 rounded-full bg-gray-400 flex items-center justify-center text-xs">未提供圖片</div>
            )}
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold">{artistName}</h1>
            
            <div className="flex justify-between items-center gap-4">
              <span className="text-[#939393]">共 {artistAlbums.length} 張專輯</span>
              {currentTrack && (
                <div className="flex justify-center items-center gap-4">
                  <button onClick={prevTrack} className="text-white hover:text-green-500">
                    <i className="fa-solid fa-backward-step text-xl"></i>
                  </button>
                  <button onClick={togglePlaying} className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                    {isPlaying ? (
                      <i className="fa-solid fa-pause"></i>
                    ) : (
                      <i className="fa-solid fa-play"></i>
                    )}
                  </button>
                  <button onClick={nextTrack} className="text-white hover:text-green-500">
                    <i className="fa-solid fa-forward-step text-xl"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* 專輯列表 */}
        {artistAlbums.length > 0 && (
          <div className="bg-[#343434] rounded-lg mb-6">
            <div className="px-4 py-3">
              <h2 className="text-lg font-semibold">音樂</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
              {artistAlbums.map((album, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2">
                    {album.image && (
                      <img
                        onClick={() => {
                          // 播放該專輯的第一首歌
                          const trackIndex = trackList.findIndex(track => track.album_name === album.name)
                          playTrack(trackIndex)
                        }} 
                        src={album.image} 
                        alt={album.name} 
                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md mx-auto cursor-pointer hover:opacity-80"
                      />
                    )}
                  </div>
                  <div className="text-sm font-medium text-[#939393]">{album.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artist;