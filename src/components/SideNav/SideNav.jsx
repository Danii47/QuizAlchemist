import "./SideNav.css";
import ListadoColecciones from "../ListadoColecciones/ListadoColecciones";


export default function SideNav() {

  const collection = {
    id: '001',
    nombre: 'MATEMÁTICAS',
    color: '#000',
    temas: [
      {
        nombre: 'Tema 1',
        questions: [
          {
            question: '¿Qué orientación sexual tiene Dani?',
            answer: 'Es maricón perdido'
          }
        ]
      },
      {
        nombre: 'Tema 2',
        questions: [
          {
            question: '¿Qué orientación sexual tiene Dani?',
            answer: 'Es maricón perdido'
          }
        ]
      }
    ]

  }

  const collections = [
    collection,
    collection,
    collection,
    collection,
    collection,
    collection,
    collection,
    collection,
    collection,
    collection,
    collection,
  ]



  return (
    <div className="sidenavContainer">
      <div className="divider"></div>
      <ListadoColecciones className="collectionsList" collections={collections} />
    </div>
  )
}