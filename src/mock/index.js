import Mock from "mockjs"; 
import searchItemData from './data/searchItem.json'


Mock.mock('/mock/searchItem', { code: 200, data: searchItemData })
