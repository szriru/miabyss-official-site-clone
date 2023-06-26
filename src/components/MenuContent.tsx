import logo02_2 from '@/assets/images/logo02_2.png'
import cn from 'classnames';
import banner_1st from '@/assets/images/banner_1st.jpg'
import banner_movie from '@/assets/images/banner_movie.jpg'

interface MenuContentProps {
  className?: string
}

// menu content for larger devices than tailwind "sm"
export default function MenuContent({ className }: MenuContentProps) {
  const menuList = [
    { name: "Top" },
    { name: "News" },
    { name: "On Air" },
    { name: "Introduction" },
    { name: "Character" },
    { name: "Staffs & Casts" },
    { name: "Story" },
    { name: "Music" },
    { name: "Blu-ray & DVD" },
    { name: "Comics" },
    { name: "Special" },
    { name: "Event" },
    { name: "Web radio" },
  ]
  return (
    <div className={cn(className, 'hidden sm:flex sm:flex-col items-center justify-start w-full bg-opacity-50 bg-[#8c804c]')}>
      <img src={logo02_2} className='my-4' />
      <ul className='w-11/12 pl-4'>
        {menuList.map(item => (
          <li key={item.name} className='border-b-2 border-dotted border-white/50 p-1 text-end'>
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
      <div className='flex flex-col space-y-4 my-8 w-11/12'>
        <a href="http://miabyss.com/index.html">
          <img src={banner_1st} alt="" />
        </a>
        <a href="http://miabyss.com/index.html">
          <img src={banner_movie} alt="" />
        </a>
      </div>
    </div>
  )
}
