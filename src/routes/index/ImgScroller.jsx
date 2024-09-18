import { useState, useEffect } from 'react';
import img1 from '../../assets/1920x600.png'
import img2 from '../../assets/1200x400_2.png'


export default function ImgScroller(){
  const images = [img1, img2];
  const [currImg, setImages] = useState(0);

  useEffect(() => {
    if (images.length === 0) return; // Avoid setting interval if there are no images

    const timer = setInterval(() => {
      setImages(prevImg => {
        const nextIndex = (prevImg + 1) % images.length;
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);
  

  return(
    <>
      <div className='h-52 bg-cover bg-center sm:h-96' style={{backgroundImage: `url(${images[currImg]})`}}>
        <div className='h-full flex justify-between sm:p-10 sm:items-center '>
          <button className='bg-darkGrey/50 p-2 h-full sm:h-auto sm:rounded-md '
          onClick={() => setImages((currImg == 0) ? images.length - 1 : currImg - 1)}
          >
            {"<"}
          </button>
          <button className='bg-darkGrey/50 p-2 h-full sm:h-auto sm:rounded-md '
          onClick={() => setImages((currImg == images.length - 1) ? 0 : currImg + 1 )}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}