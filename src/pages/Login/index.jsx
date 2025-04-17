import LOGO from '@/assets/images/icon/logo.svg'
import { Link } from 'react-router-dom'

const Login = () => {
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
        
        <div class="login-form">
          <div className="Group pb-4">
            <div className="labelGroup flex flex-col items-center">
              <label className='mail-label mt-5 mb-2 text-[13px]' for="login-username">電子信箱或使用者名稱</label>
              <input className='mail-input p-3 text-white ' type="text" placeholder='電子信箱或使用者名稱' />
            </div>
          </div>
        </div>
        <button class="login-Button continue-Button mb-8">
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