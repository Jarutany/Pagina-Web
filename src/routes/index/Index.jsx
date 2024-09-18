import ImgScroller from "./ImgScroller"
import img from '../../assets/1200x800.png'


export default function Index(){

  return(
    <>
      <div className="bg-white h-full">
        
        <ImgScroller />
        
        <div className="p-10 text-black text-justify">
          <h1 className="font-normal text-xl">Conocenos</h1>
          <div className="mt-5 flex flex-wrap justify-center sm:flex-nowrap sm:justify-between">
            <p className="sm:w-1/2 sm:mr-5 sm:m-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue mi  ut volutpat pellentesque. Proin nisi nulla, semper id enim et, sollicitudin convallis mi. Sed egestas blandit odio laoreet finibus.<br></br><br></br> In  hac habitasse platea dictumst. Nullam egestas ante sit amet nisl  pulvinar, id pretium tortor cursus. Vestibulum metus ante, eleifend id  ante non, iaculis tempor ligula. Praesent rutrum, neque vel pretium  sagittis, ex orci blandit mi, non venenatis libero neque sit amet felis. <br></br><br></br> Duis  accumsan, ante id imperdiet lobortis, elit enim commodo magna, eu  tincidunt est est sed est. Phasellus urna urna, aliquam et lorem eu,  rutrum tristique arcu. Fusce auctor arcu risus, eu tristique tortor  hendrerit sed.
            </p>
            <div className="sm:w-1/2 mt-5 sm:mt-0 sm:ml-5 bg-lightGreen flex items-center">
              <img className="sm:w-full sm:max-h-64 h-64" src={img} alt="" />
            </div>
          </div>
        </div>

        <div className="text-black flex flex-col items-center p-5">
          <h1 className="font-normal text-xl">Nuestros servicios</h1>
          <div className="flex flex-wrap justify-center sm:flex-nowrap sm:justify-between p-5 sm:p-10 w-full ">
            <img className="w-full m-2 sm:m-4" src={img} alt="" />
            <img className="w-full m-2 sm:m-4" src={img} alt="" />
            <img className="w-full m-2 sm:m-4" src={img} alt="" />
          </div>
        </div>

        <div className="">

        </div>
      </div>
    </>
  )
}