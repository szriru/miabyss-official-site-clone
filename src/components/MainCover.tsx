import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import cn from 'classnames'
import MainCoverSwitch from '@/components/MainCoverSwitch'
import yt_thumbnail from "@/assets/images/yt_thumbnail.jpg"

interface MainCoverProps {
  coverImg: string
  className: string
}

// Main cover image section at the top of home page
export default function MainCover({ coverImg, className }: MainCoverProps) {
  const [fixed, setFixed] = useState(true)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const handleLoad = () => {
    setIsImageLoaded(true)
  }
  const handleEnter = () => {
    setFixed(false)
  }
  const handleLeave = ({ currentPosition }: { currentPosition: any}) => {
    // ビューポイントの下にLeaveしたときだけ
    if (currentPosition === Waypoint.below) {
      setFixed(true)
    }
  }
  return (
    <>
      <div className={cn(className, "w-full relative")}>

        <img src={coverImg}
          alt=""
          className='w-full'
          width={1400}
          height={1894}
          onLoad={handleLoad}
        />
        {/* "sticky" not working properly for some reason */}
        {isImageLoaded && (
          <Waypoint
            onEnter={handleEnter}
            onLeave={handleLeave}
          />
        )}

        <div className='sm:hidden'>
          <h2 className='absolute right-0 top-0 p-12 [writing-mode:vertical-lr] font-semibold'>二度とは戻らない望郷の彼方へ―</h2>
          <h2 className='absolute left-0 bottom-0 p-12 text-fuchsia-700 font-semibold text-center'>
            Blu-ray&DVD <br />
            上巻 2022年10月26日 <br />
            下巻 2022年12月23日
          </h2>
        </div>

        <div className={cn('hidden sm:right-0 sm:bottom-0 w-1/3 sm:flex justify-center items-center my-8 group', (fixed ? "sm:fixed" : "sm:absolute"))}>
          <a target="_blank" className="w-3/5 group-hover:visible transition-opacity opacity-0 group-hover:opacity-100 duration-500" href="https://www.youtube.com/watch?v=lsDt6xQQxYY">
            <img src={yt_thumbnail}  alt="" className='w-full ' />
          </a>
          <MainCoverSwitch className="w-1/5" />
        </div>
      </div>

    </>
  )
}