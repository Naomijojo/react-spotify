import Mock from "mockjs"; 
import albumData from './data/album.json'; 

Mock.mock('/mock/albumData', { code: 200, data: albumData })
