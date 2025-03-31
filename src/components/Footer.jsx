import instagramIcon from '@/assets/images/footer-btn/instagram.svg'
import twitterIcon from '@/assets/images/footer-btn/twitter.svg'
import facebookIcon from '@/assets/images/footer-btn/facebook.svg'


const Footer = () => {
  return (
    <div className="footer-wrapper text-start" >
      <nav className='footer'>
        <div className="footerSection flex flex-col mt-8">
          <div className="footerLinks flex flex-col flex-wrap">
            <div className="TopLinksGroup mb-8">
              <ul>
                <p>公司簡介</p>
                <li>關於我們</li>
                <li>職位空缺</li>
                <li>For the Record</li>
              </ul>
            </div>
            <div className="TopLinksGroup mb-8">
              <ul>
                <p>社群</p>
                <li>藝人專屬</li>
                <li>開發商</li>
                <li>廣告宣傳</li>
                <li>投資者</li>
                <li>供應商</li>
              </ul>
            </div>
            <div className="TopLinksGroup mb-8">
              <ul>
                <p>常用連結</p>
                <li>支援</li>
                <li>免費行動版 App</li>
              </ul>
            </div>
            <div className="TopLinksGroup mb-8">
              <ul>
                <p>Spotify 方案</p>
                <li>Premium Individual</li>
                <li>Premium Duo</li>
                <li>Premium Family</li>
                <li>Premium Student</li>
                <li>Premium Free</li>
              </ul>
            </div>
          </div>
          <div className="social-container flex gap-4 mb-10">
            <div className="socialLinks">
              <img src={instagramIcon} alt="instagram" className='socialLinks-icon w-4 h-4' />
            </div>
            <div className="socialLinks">
              <img src={twitterIcon} alt="instagram" className='socialLinks-icon w-4 h-4' />
            </div>
            <div className="socialLinks">
              <img src={facebookIcon} alt="instagram" className='socialLinks-icon w-4 h-4' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Footer
