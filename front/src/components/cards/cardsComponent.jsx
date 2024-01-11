import CardComponent from '../card/cardComponent'

const CardsComponent=({conductoresPmostrar})=> {

    return (
      <div>
        {/* conductoresPmostrar.length? */(conductoresPmostrar?.map((conductor)=>(
          <CardComponent key={conductor.dni} conductor={conductor}/>
        ))
        )/* :(<h5>Cargando..</h5>) */
        }
      </div>
    )
}
  
export default CardsComponent