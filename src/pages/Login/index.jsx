import LOGO from '@/assets/images/icon/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { message, Input } from 'antd'
import { userApi } from '@/api/user'
import { useUserStore } from '@/store/user'
// import axios from 'axios'


const Login = () => {
  const navigate = useNavigate()
  const { token, setToken, userInfo, setUserInfo } = useUserStore()
  const [ username, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  
  // 如何登入？
  // 輸入使用者名稱或密碼 -> 資訊傳給登入API -> 後端確認資料庫事是否有帳密 -> (後端會加密變成JWT)回傳token給前端 -> 前端儲存token到localStorage -> 是否為登入狀態？看本地有無token(後端會測試token時效性)
  const login = async () => {
    // 防呆警示
    if (!username || !password) {
      message.warning('請輸入使用者名稱或信箱')
      return
    }
    try {
      // 從dummyjson取回token
      const { accessToken, image } = await userApi.login(username, password)
      console.log('AccessToken:', accessToken)

      // 存入token userInfo到localStorage
      setToken(accessToken)
      setUserInfo({ image })

      // 導向首頁
      navigate('/')

      // 通知登入成功
      message.success('登入成功')
    } catch (err) {
      // 通知登入錯誤
      message.error('登入失敗，請檢查您的使用者名稱或密碼')
      console.error(err)
    }
  }



 
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      login()
    }
  }

  return (
    <div className="flex-1 login-bg">
      <div class="login-container p-12 flex flex-col gap-[10px] justify-center items-center">
        <img className='w-7 h-7' src={LOGO} alt="" />
        <h1 className='login-title'>登入到 Spotify</h1>
        <ul class="login-btns-container">
          <li>
            <button class="login-Button">
              <span className='google-icon'></span>
              <span className='encore-text'>以 Google 帳戶繼續</span>  
            </button>
          </li>
          <li>
            <button class="login-Button">
              <span className='facebook-icon'></span>
              <span className='encore-text'>使用 Facebook 帳戶繼續</span>  
            </button>
          </li>
          <li>
            <button class="login-Button">
              <span className='apple-icon'></span>
              <span className='encore-text'>使用 Apple 帳戶繼續</span>  
            </button>
          </li>
        </ul>
        {/* 登入內容 */}
        <div class="login-form">
          <div className="Group py-4">
            <div className="labelGroup flex flex-col items-start">
              <label className='username text-[16px]'>帳號</label>
              <Input
                className='custom-login-input'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="請輸入帳號"
              />
              <label className='password mt-2 text-[16px]'>密碼</label>
              <Input.Password
                className='custom-login-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="請輸入密碼"
              />
            </div>
          </div>
        </div>
        <button class="login-Button continue-Button mb-8" onClick={login}>
          <span className='continue-btn flex text-black font-bold'>繼續</span>  
        </button>
        <div className="signup-section flex flex-col items-center">
          <Link className='text-center' style={{color:'#818181'}}>未註冊帳戶?</Link>
          <Link className='text-center'>註冊 Spotify.</Link>
        </div>
      </div>
    </div>

  )
}

export default Login