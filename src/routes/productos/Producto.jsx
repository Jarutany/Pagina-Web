
export default function Producto(props){
  console.log(props.prop.nombre)
  return(
    <>
      <div className="pb-10 flex flex-wrap sm:flex-nowrap w-full">
        <div className="sm:w-1/3">
          <img src={props.prop.img} alt="Foto Producto"
           className=""
          />
        </div>
        <div className="sm:w-2/3 p-5 sm:px-10 sm:pt-10 sm:pt-15 text-2xl bg-lightGreen/15 rounded-r-lg">
          <div className="">
            <h1 className="font-normal text-2xl sm:text-4xl pb-5">{props.prop.nombre}</h1>
            <p className="text-xl pb-2">{props.prop.sub}</p>
          </div>
          <div className=" sm:pt-5 sm:text-lg text-sm text-justify">
            <p>{props.prop.desecripcion.map((x) => <p className="sm:p-1">-{x}</p>)}</p>
          </div>

        </div>
      </div>
    </>
  )
}