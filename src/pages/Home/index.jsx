// import MiniPlayer from "@/components/MiniPlayer"
import TabBar from "@/components/TabBar"
// import MusicPlayer from "@/components/MusicPlayer"
// import HomeCard from "@/components/HomeCard"
// import { useState, useEffect } from "react"
// import { homeApi } from "@/api/home"
// import { useNavigate } from "react-router-dom"


const Home = () => {

  
  return (
    <div className="homePage-container flex flex-col flex-nowrap w-full ">
      <div className="recommendCard-container flex flex-wrap justify-center items-center mt-[80px]">
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
            <img className="w-[68px] h-[68px] rounded-[4px] " src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/5/ab6761610000e5eb0a37c84786accc6db6a11e93/zh-Hant" alt="" />
            <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">Daiy Mix 5</span>
        </div>
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
            <img className="w-[68px] h-[68px] rounded-[4px] " src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5eb1b44d5d4d2e564f28f4046cf/zh-Hant" alt="" />
            <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">Daiy Mix 2</span>
        </div>
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
            <img className="w-[68px] h-[68px] rounded-[4px] " src="https://i.scdn.co/image/ab67616100005174232bf5570b8772b76850f202" alt="" />
            <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">最愛...田馥甄</span>
        </div>
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
          <img className="w-[68px] h-[68px] rounded-[4px] " src="https://seed-mix-image.spotifycdn.com/v6/img/artist/5H8TJITZE1sPjVR2ACzXNS/zh-Hant/default" alt="" />
          <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">伍佰</span>
        </div>
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
            <img className="w-[68px] h-[68px] rounded-[4px] " src="https://i.scdn.co/image/ab6761610000e5eb438e5730e9e86121f329d2dd" alt="" />
            <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">陳奕迅</span>
        </div>
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
            <img className="w-[68px] h-[68px] rounded-[4px] " src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/6g641431O1Xkl7HAs2yFEg/zh-Hant" alt="" />
            <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">茄子蛋 電台</span>
        </div>
      </div>
      {/* 你的熱門合輯 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">你的熱門合輯</h3>
        <div className="homeCard-container">
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/mandopop/19nBOLVLKxrijWEvjpXFI8/zh-Hant/default" alt="" />
            <div className="homeCard-title">華語流行音樂合輯</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/folk_acoustic/1M71iSbPLnbhnTH0Ogawwy/zh-Hant/default" alt="" />
            <div className="homeCard-title">民謠與原音樂合輯</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/chill/3URqNrgNzVpANhWgCYxuQ8/zh-Hant/default" alt="" />
            <div className="homeCard-title">弛放音樂合輯</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/k_pop/3eVa5w3URK5duf6eyVDbu9/zh-Hant/default" alt="" />
            <div className="homeCard-title">韓國流行樂合集</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/happy/0SIXZXJCAhNU8sxK0qm7hn/zh-Hant/default" alt="" />
            <div className="homeCard-title">歡樂音樂合輯</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/artist/6DuHQk8gJbyVlhajer8IuF/zh-Hant/default" alt="" />
            <div className="homeCard-title">李玖哲合輯</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/nineties/1r9DuPTHiQ7hnRRZ99B8nL/zh-Hant/default" alt="" />
            <div className="homeCard-title">90年代合輯</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/2elBjNSdBE2Y3f0j1mjrql/zh-Hant/default" alt="" />
            <div className="homeCard-title">2000年代合輯</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/cantopop/57g2v7gJZepcwsuwssIfZs/zh-Hant/default" alt="" />
            <div className="homeCard-title">粵語流行樂合輯</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/moody/44hNriHhKRq8TMl8QH6yX2/zh-Hant/default" alt="" />
            <div className="homeCard-title">低迴音樂合輯</div>
          </div>
        </div>
      </div>
      {/* 專為jojo精心打造 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">專為Jojo精心打造</h3>
        <div className="homeCard-container">
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab67616d0000b273ce49d17e4a3f905b885818e0/zh-Hant" alt="" />
            <div className="homeCard-title">Daily Mix 3</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/5/ab6761610000e5eb0a37c84786accc6db6a11e93/zh-Hant" alt="" />
            <div className="homeCard-title">Daily Mix 5</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5eb1b44d5d4d2e564f28f4046cf/zh-Hant" alt="" />
            <div className="homeCard-title">Daily Mix 2</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab67616d0000b273c17714a11ba7db7fda4787fe/zh-Hant" alt="" />
            <div className="homeCard-title">Daily Mix 1</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f0000000217c8db5bb90b803dd916dd52" alt="" />
            <div className="homeCard-title">婚禮的祝福</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://seed-mix-image.spotifycdn.com/v6/img/artist/5H8TJITZE1sPjVR2ACzXNS/zh-Hant/default" alt="" />
            <div className="homeCard-title">伍佰</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/4/ab6761610000e5eb3c0869956dd3913fd83db126/zh-Hant" alt="" />
            <div className="homeCard-title">Daily Mix 4</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f00000002daf40ac66ce617fa2c146fc6" alt="" />
            <div className="homeCard-title">2000 華語金曲</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f00000002982b23b11e843d860edb5a36" alt="" />
            <div className="homeCard-title">經典傳唱</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f00000002cbc3d90de78e59026c3ea68c" alt="" />
            <div className="homeCard-title">高人氣金曲</div>
          </div>
        </div>
      </div>
      {/* 電台推薦 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">電台推薦</h3>
        <div className="homeCard-container">
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/3w8fdvgPp2aKgy125EBgVg/zh-Hant" alt="" />
            <div className="homeCard-title">玖壹壹 電台</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4AWa6pcQK9J9aSAN67cLHv/zh-Hant" alt="" />
            <div className="homeCard-title">麋先生 電台</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/250b0Wlc5Vk0CoUsaCY84M/zh-Hant" alt="" />
            <div className="homeCard-title">JENNIE 電台</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/40tNK2YedBV2jRFAHxpifB/zh-Hant" alt="" />
            <div className="homeCard-title">陶喆 電台</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/7z7tLLiBfmH0kZ2lNVs8LW/zh-Hant" alt="" />
            <div className="homeCard-title">en 電台</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/5ZxRmJ21NzjxD2ZGBxi7um/zh-Hant" alt="" />
            <div className="homeCard-title">陳華 電台</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/3eVa5w3URK5duf6eyVDbu9/zh-Hant" alt="" />
            <div className="homeCard-title">ROSÉ 電台</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/30b9WulBM8sFuBo17nNq9c/zh-Hant" alt="" />
            <div className="homeCard-title">G-DRAGON 電台</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/6g641431O1Xkl7HAs2yFEg/zh-Hant" alt="" />
            <div className="homeCard-title">茄子蛋 電台</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/5H8TJITZE1sPjVR2ACzXNS/zh-Hant" alt="" />
            <div className="homeCard-title">伍佰 電台</div>
          </div>
        </div>
      </div>
      {/* 重溫經典 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">重溫經典</h3>
        <div className="homeCard-container">
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f000000027f1ba48806f21185d9fd714b" alt="" />
            <div className="homeCard-title">最愛...張學友</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3RBGU0-default.jpg" alt="" />
            <div className="homeCard-title">最愛...告五人</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f00000002bac0d41962ea56d76731bfa7" alt="" />
            <div className="homeCard-title">最愛...蔡健雅</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f0000000256c590d26a69cf96378775e7" alt="" />
            <div className="homeCard-title">返家輕聽</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/0SIXZXJCAhNU8sxK0qm7hn/zh-Hant" alt="" />
            <div className="homeCard-title">孫燕姿電台</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f0000000295e6df74fb114cf2fb21d44e" alt="" />
            <div className="homeCard-title">情歌不敗</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f000000027f27fdf66bc8b3cce70ddce9" alt="" />
            <div className="homeCard-title">All Out 80s</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg" alt="" />
            <div className="homeCard-title">前50名-全球</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67616d00001e025f76d4ab172efb809e2f3918" alt="" />
            <div className="homeCard-title">淚橋</div>
          </div>
        </div>
      </div>    
      {/* 為你挑選的最新發行音樂 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">為你挑選的最新發行音樂</h3>
        <div className="homeCard-container">
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67616d00001e02e315e968f364d79e460d8f62" alt="" />
            <div className="homeCardTitle">Love Moments</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67616d00001e025a43918ea90bf1e44b7bdcfd" alt="" />
            <div className="homeCardTitle">Ruby</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67616d00001e02d6440a0195afdb56353be153" alt="" />
            <div className="homeCardTitle">半熟理想</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67616d00001e020da16b7b5e44fa09ef4fda62" alt="" />
            <div className="homeCardTitle">夢想家 The Dreamer</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67616d00001e0265bcb498250d15917f92464f" alt="" />
            <div className="homeCardTitle">Jumping Machine 跳樓機</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67616d00001e022625625847482492f9e2e665" alt="" />
            <div className="homeCardTitle">11月的蕭邦</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67616d00001e02b0860cf0a98e09663c82290c" alt="" />
            <div className="homeCardTitle">MAYHEN</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67616d00001e02119800c5fc88785ee3ed1524" alt="" />
            <div className="homeCardTitle">DRIP</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67616d00001e02e1b8e368ceafe1117e846859" alt="" />
            <div className="homeCardTitle">Übermensch</div>
          </div>
        </div>
      </div>
      {/* 根據你最近聽過的音樂 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">根據你最近聽過的音樂</h3>
        <div className="homeCard-container">
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f00000002cbc3d90de78e59026c3ea68c" alt="" />
            <div className="homeCard-title">高人氣金曲</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f00000002de1215e8687809289951d212" alt="" />
            <div className="homeCard-title">週末清聽</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f00000002098599cb6b5735184fa97e86" alt="" />
            <div className="homeCard-title">十年全精選：華語流行</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f00000002982b23b11e843d860edb5a36" alt="" />
            <div className="homeCard-title">經典傳唱</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f0000000256c590d26a69cf96378775e7" alt="" />
            <div className="homeCard-title">返家輕聽</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f000000027269ebfcb2bf86ce5315c199" alt="" />
            <div className="homeCard-title">微冰半糖</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f0000000295e6df74fb114cf2fb21d44e" alt="" />
            <div className="homeCard-title">情歌不敗</div>
          </div>
          <div className="homeCard">
            <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src="https://i.scdn.co/image/ab67706f000000023c52d46633c2a00263800486" alt="" />
            <div className="homeCard-title">2000年代 流行精選</div>
          </div>
        </div>
      </div>
      {/* <MiniPlayer className="" /> */}
      <TabBar className="absolute bottom-0 left-0 w-full pl-0"/>
    </div>
  )
}

export default Home
