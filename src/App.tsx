import { useState } from 'react'

import HeaderForSm from '@/components/HeaderForSm';
import MainContent from '@/components/MainContent';
import LoadingScreen from '@/components/LoadingScreen';

import CoverContext from '@/libs/CoverContext';

export default function App() {
  const [cover, setCover] = useState<1 | 2 | 3>(1)
  const [loading, setLoading] = useState(0)
  return (
    <>
      <CoverContext.Provider value={{ cover, setCover }}>
        <div className='z-60 w-screen flex flex-col items-center bg-[#8c804c]'>
          {loading < 101 && <LoadingScreen loading={loading} setLoading={setLoading} />}
          <HeaderForSm />
          {/* Inject modal for mobile to this #menu */}
          <div id="menu"></div>
          <MainContent />
        </div>
      </CoverContext.Provider>
    </>
  )
}