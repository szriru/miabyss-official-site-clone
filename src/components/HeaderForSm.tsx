import { useState } from 'react'
import { createPortal } from 'react-dom'

import ModalMenuContent from '@/components/ModalMenuContent';
import { IconMenu } from '@/components/icons/icons';

import logo02_2 from '@/assets/images/logo02_2.png'

// Header for smaller screen devices
export default function HeaderForSm() {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(prev => !prev)
  }
  return (
    <>
      <header className='sm:hidden z-20 flex w-full justify-between px-4 h-12 overflow-visible bg-[#8c804c]'>
        <img className={showModal ? "h-24 opacity-0" : "h-24 z-20"} src={logo02_2} />

        <div className='flex justify-center items-center space-x-1' id="nav">
          <IconMenu />
          <button
            onClick={handleClick}
          >
            <h2 className='text-lg'>Menu</h2>
          </button>
          {/* Inject to #menu. #menu is located in the parent component one level above. */}
          {showModal && createPortal(
            <div className='z-50 min-w-screen min-h-screen'>
              <ModalMenuContent className="" onClose={() => setShowModal(false)} />
            </div>,
            document.getElementById("menu") as Element | DocumentFragment
          )}
        </div>
      </header>
    </>
  )
}