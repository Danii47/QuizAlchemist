import "./TestPage.css"
import SelectMultiple from "../SelectMultiple/SelectMultiple"



export default function TestPage({ collectionSelected }) {


  return (
    <>
    
      Estás en la página de: {collectionSelected.nombre}

      <SelectMultiple themes={collectionSelected.themes}/>


    </>
  )
}