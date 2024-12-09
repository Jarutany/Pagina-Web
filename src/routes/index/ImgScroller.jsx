import { useState, useEffect } from 'react';
import img1 from '../../assets/1920x600.png';
import img2 from '../../assets/1920x600_2.png';

export default function ImgScroller() {
  const images = [img1, img2];
  const [currImg, setImages] = useState(0);

  useEffect(() => {
    if (images.length === 0) return; // Avoid setting interval if there are no images

    const timer = setInterval(() => {
      setImages((prevImg) => {
        const nextIndex = (prevImg + 1) % images.length;
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);

  return (
    <>
      <div className="relative w-full h-full">
        <img
          src={images[currImg]}
          alt={`Slide ${currImg + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center group">
          <button
            className="bg-darkGrey/50 text-white p-2 sm:rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"
            onClick={() => setImages(currImg === 0 ? images.length - 1 : currImg - 1)}
          >
            {"<"}
          </button>
          <button
            className="bg-darkGrey/50 text-white p-2 sm:rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"
            onClick={() => setImages(currImg === images.length - 1 ? 0 : currImg + 1)}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}