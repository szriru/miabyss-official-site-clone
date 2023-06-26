import CoverContext from "@/libs/CoverContext"
import { useContext } from 'react'

import MainCoverSwitch from '@/components/MainCoverSwitch';
import MenuContent from '@/components/MenuContent';
import MainCover from '@/components/MainCover';

import { IconTwitter, IconFacebook, IconLine } from '@/components/icons/icons'

import TwitterTimelineEmbed from '@/components/TwitterEmbbedTimeline';

import ReactPlayer from 'react-player/youtube'

import cover1 from '@/assets/images/cover1.jpg'
import cover2 from '@/assets/images/cover2.jpg'
import cover3 from '@/assets/images/cover3.jpg'

import banner_1st from '@/assets/images/banner_1st.jpg'
import banner_movie from '@/assets/images/banner_movie.jpg'

// Main content
export default function MainContent() {
  const { cover } = useContext(CoverContext)
  // importing all images in a folder as vitejs
  // https://github.com/vitejs/vite/discussions/12191
  const comicCovers = Object.values(import.meta.glob('@/assets/images/comicCover/*.jpg', { eager: true, as: 'url' }))

  return (
    <>
      <main className='w-full flex flex-col justify-center items-center mb-24 space-y-4'>
        <div className='relative flex justify-center'>
          <MenuContent className="h-full hidden sm:flex sm:w-1/5 sm:sticky sm:top-0" />
          <MainCover coverImg={
            cover === 1 ? cover1 :
              cover === 2 ? cover2 :
                cover === 3 ? cover3 : cover1
          }
            className="sm:w-4/5"
          />

        </div>

        <MainCoverSwitch className='sm:hidden flex justify-center items-center w-11/12 mt-4' />

        <div className='sm:hidden flex justify-center items-center  w-11/12'>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=lsDt6xQQxYY"
          />
        </div>

        <div className='sm:hidden flex flex-col justify-center items-center space-y-4 w-11/12 '>
          <a href="http://miabyss.com/index.html">
            <img src={banner_1st} alt="" />
          </a>
          <a href="http://miabyss.com/index.html">
            <img src={banner_movie} alt="" />
          </a>
        </div>

        <div className='sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row w-full space-y-4 justify-center items-center'>
          <div className=' h-96 sm:w-5/12 p-4 bg-white/80 w-11/12 flex flex-col border border-purple-500 rounded-md'>
            <h1 className='flex justify-start'>NEWS</h1>
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold">このサイトはreactjsとtailwindcssによって書かれたメイドインアビス公式サイトのクローンです。</p>
                <a className="text-blue-500" href="https://github.com/szriru/miabyss-official-site-clone" target="_blank">https://github.com/szriru/miabyss-official-site-clone</a>
              </div>
              <p>News2</p>
              <p>News3</p>
            </div>
          </div>

          <div className='h-96 sm:w-5/12 space-y-2 p-4 bg-white/80 w-11/12 flex flex-col border border-purple-500 rounded-md'>
            <h1 className='flex justify-start'>Twitter</h1>
            <div>
              <TwitterTimelineEmbed
                tweetLimit={5}
                sourceType="profile"
                screenName="miabyss_anime"
                options={{ height: 300 }}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full justify-center items-center max-w-6xl'>
          <h1>COMICS</h1>
          <div className='p-4 w-11/12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
            {comicCovers.map((item, idx) => (
              <img key={idx} className="w-full rounded-md" src={item} alt="" />
            ))}
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full space-y-4'>
          <div className='flex justify-center items-center w-11/12 h-48 bg-[#ffd207] bg-opacity-40 rounded-md'>
            BANNER
          </div>
          <div className='flex justify-center items-center w-11/12 h-48 bg-[#ffd207] bg-opacity-40 rounded-md'>
            BANNER
          </div>
          <div className='flex justify-center items-center w-11/12 h-48 bg-[#ffd207] bg-opacity-40 rounded-md'>
            BANNER
          </div>
        </div>

        <div className='flex items-center justify-center space-x-2 text-5xl p-2 rounded-md bg-white'>
          <IconTwitter className=" text-sky-500" />
          <IconFacebook className="text-blue-700" />
          <IconLine className="text-green-500" />
        </div>

        <footer className='text-md text-center w-full'>
          <p>©つくしあきひと・竹書房／</p>
          <p>メイドインアビス「烈日の黄金郷」 制作委員会</p>
        </footer>
      </main>
    </>
  )
}