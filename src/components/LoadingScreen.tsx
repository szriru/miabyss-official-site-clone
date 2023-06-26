import { useState, useEffect } from 'react';
import logo02_2 from '@/assets/images/logo02_2.png'

// Loadin screen when landing
export default function LoadingScreen({ loading, setLoading }) {
  const [opacity, setOpacity] = useState(1);
  const [isFading, setIsFading] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      setLoading((oldLoading) => {
        if (oldLoading >= 100) {
          clearInterval(timer);
          setLoading(100)
        }
        return oldLoading + 1;
      });
    }, 2);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if(loading < 99) return;

    setIsFading(true);
    const opacityTimer = setInterval(() => {
      setOpacity((oldOpacity) => {
        if(oldOpacity < 0.1){
          setIsFading(false);
          clearInterval(opacityTimer);
        }
        return oldOpacity - 0.01;
      })
    },10)
    return () => clearInterval(opacityTimer);
  }, [loading]);
  
  useEffect(() => {
    if(!isFading && opacity <= 0.1){
      setLoading(101)
    }
  }, [isFading, opacity]);

  return (
    <div className="z-40 fixed flex items-center bg-[#c77bf3] justify-center h-screen w-screen"
         style={{opacity: opacity}}>
      <div className="flex flex-col w-full justify-center items-center">
        <img src={logo02_2} className='w-48' alt="" />
        <h3 className='text-lg'>loading {loading}%</h3>
        <div
          style={{ width: `${loading}%` }}
          className="bg-orange-500 h-1"
        ></div>
      </div>
    </div>
  );
}