import Mock from "mockjs"; 
import playlistData from './data/playlist.json';


Mock.mock('/mock/playlist', { code: 200, data: playlistData})
