
import "./ListadoColecciones.css";

export default function ListadoColecciones({ collections }) {


  return (
    <ul className="collectionsGroup">
      {
        collections.map((coleccion) => (
          // TODO: sé que está mal lo del id dani
          <li>
            <button key={coleccion.id}>
              <div className="bandContainer">
                {coleccion.nombre}
              </div>
            </button>
          </li>
        ))
      }
    </ul>
  )
}