import Mock from "mockjs"; 
import songListData from './data/songList.json'; 


Mock.mock('/mock/songList', { code: 200, data: songListData })
