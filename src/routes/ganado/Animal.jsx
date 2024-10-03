
export default function Animal(props){
  return(
    <>
      <div className="pb-10 flex flex-wrap sm:flex-nowrap text-justify">
        <div className="sm:w-1/3">
          <img src={props.prop.img} alt="Foto Producto"
           className=""
          />
        </div>
        <div className="sm:w-2/3 p-5 sm:px-10 sm:pt-10 sm:pt-15 text-2xl bg-lightGreen/15 rounded-b-lg sm:rounded-r-lg">
          <div className="w-1/3">
            <h1 className="font-normal text-2xl sm:text-4xl pb-5">{props.prop.nombre}</h1>
            <p className="text-3xl">{props.prop.raza}</p>
          </div>
          <div className="sm:w-2/3 sm:pt-10">
            <p>{props.prop.desecripcion}</p>
          </div>

        </div>
      </div>
    </>
  )
}