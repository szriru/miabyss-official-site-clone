import { useContext } from 'react'
import CoverContext from '@/libs/CoverContext';
import cn from 'classnames';

import banner_circle_001 from '@/assets/images/b_001.png'
import banner_circle_002 from '@/assets/images/b_002.png'
import banner_circle_003 from '@/assets/images/b_003.png'


interface MainCoverSwitchProps {
  className?: string
}

// Switch for main cover image
export default function MainCoverSwitch({ className }: MainCoverSwitchProps) {
  const { setCover } = useContext(CoverContext) || {}

  const handleClick= (cover: 1|2|3) => {
    if (setCover) {
      setCover(cover);
    }
  };

  return (
    <div className={cn(className, "")}>
      <button onClick={() => handleClick(1)}>
        <img src={banner_circle_001} alt="" />
      </button>
      <button onClick={() => handleClick(2)}>
        <img src={banner_circle_002} alt="" />
      </button>
      <button onClick={() => handleClick(3)}>
        <img src={banner_circle_003} alt="" />
      </button>
    </div>
  )
}