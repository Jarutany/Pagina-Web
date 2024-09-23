import ImgScroller from "./ImgScroller"
import img from '../../assets/800x800.png'
import Divider from '@mui/material/Divider';


export default function Productos() {
  return (
    <>
      <div className="sm:text-2xl">
        <ImgScroller />

        <div className="bg-white text-black">
          <div className="p-10">

            <div className="flex flex-wrap sm:flex-nowrap sm:justify-between ">
              <div className="sm:grid sm:place-content-center sm:w-2/3 text-justify sm:pr-10">
                <h1 className="font-normal text-4xl pb-5">Nuestra Historia</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  congue mi ut volutpat pellentesque. Proin nisi nulla, semper
                  id enim et, sollicitudin convallis mi. Sed egestas blandit
                  odio laoreet finibus. <br />
                  <br />
                  In hac habitasse platea dictumst. Nullam egestas ante sit amet
                  nisl pulvinar, id pretium tortor cursus. Vestibulum metus
                  ante, eleifend id ante non, iaculis tempor ligula. Praesent
                  rutrum, neque vel pretium sagittis, ex orci blandit mi, non
                  venenatis libero neque sit amet felis. <br />
                  <br />
                  Duis accumsan, ante id imperdiet lobortis, elit enim commodo
                  magna, eu tincidunt est est sed est. Phasellus urna urna,
                  aliquam et lorem eu, rutrum tristique arcu. Fusce auctor arcu
                  risus, eu tristique tortor hendrerit sed. <br />
                </p>
              </div>
              <div className=" flex items-center justify-center w-full sm:m-5 pt-5 sm:w-1/3 sm:pt-0">
                <img
                  src={img}
                  alt="Imagen del Rancho"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <Divider variant="middle" />

          <div className="flex flex-col items-center p-5">
            <h1 className="font-normal text-4xl pb-5">Misión y Visión</h1>
            <div className="flex flex-wrap gap-y-5  sm:flex-nowrap justify-between p-5 text-justify">
              <p className="sm:pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue mi  ut volutpat pellentesque. Proin nisi nulla, semper id enim et,  sollicitudin convallis mi. Sed egestas blandit odio laoreet finibus.</p>
              <p className="sm:pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue mi  ut volutpat pellentesque. Proin nisi nulla, semper id enim et,  sollicitudin convallis mi. Sed egestas blandit odio laoreet finibus. </p>
            </div>
          </div>

          <Divider variant="middle" />

          <div className="p-10">
            <div className="flex items-center justify-center">
              <h1 className="font-normal text-4xl pb-5">Nuestra Compañía</h1>
            </div>
            <div className="flex flex-wrap justify-between sm:flex-nowrap">
              <img
                src={img}
                alt="Imagen del Rancho"
                className="h-full bg-lightGreen sm:w-1/3"
              />
              <p className="sm:w-2/3 text-justify sm:place-content-center pt-10 sm:pt-0 sm:pl-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  congue mi ut volutpat pellentesque. Proin nisi nulla, semper
                  id enim et, sollicitudin convallis mi. Sed egestas blandit
                  odio laoreet finibus. <br />
                  <br />
                  In hac habitasse platea dictumst. Nullam egestas ante sit amet
                  nisl pulvinar, id pretium tortor cursus. Vestibulum metus
                  ante, eleifend id ante non, iaculis tempor ligula. Praesent
                  rutrum, neque vel pretium sagittis, ex orci blandit mi, non
                  venenatis libero neque sit amet felis. <br />
                  <br />
                  Duis accumsan, ante id imperdiet lobortis, elit enim commodo
                  magna, eu tincidunt est est sed est. Phasellus urna urna,
                  aliquam et lorem eu, rutrum tristique arcu. Fusce auctor arcu
                  risus, eu tristique tortor hendrerit sed. <br />
                </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
