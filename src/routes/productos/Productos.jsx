import ImgScroller from "../productos/ImgScroller"
import img from '../../assets/1200x800.png'

export default function Productos() {
  return (
    <>
      <div className="sm:text-2xl">
        <ImgScroller />

        <div className="bg-white text-black">
          <div className="p-10">

            <div className="flex flex-wrap sm:flex-nowrap sm:justify-between ">
              <div className="sm:grid sm:place-content-center sm:w-1/2 text-justify sm:pr-5">
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
              <div className=" flex items-center justify-center w-full sm:m-5 pt-5 sm:w-1/2 sm:pt-0">
                <img
                  src={img}
                  alt="Imagen del Rancho"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
