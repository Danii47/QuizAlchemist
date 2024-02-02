import "./InfoPage.css"
import { Tree } from 'primereact/tree'
import { Container } from "react-bootstrap"
import { useState, useEffect } from "react"

export default function InfoPage({ collectionSelected }) {

  const [nodes, setNodes] = useState([])

  useEffect(() => {
    const newNodes = [{ key: "0", label: `${collectionSelected.name} [${collectionSelected.themes.length}]`, icon: undefined, children: [] }]
    collectionSelected.themes.forEach((theme, key) => newNodes[0].children.push({ key: `0-${key}`, label: `[${key + 1}] ${theme.name} (${theme.questions.length})`, icon: undefined }))
    setNodes(newNodes)
  }, [collectionSelected])



  return (
    <Container className="infoPage">

      <div className="treeContainer rounded boxShadow p-0">
        <Tree value={nodes} className="w-full md:w-30rem justify-content-center tree" />
      </div>


      <div className="gridLayout">
      <div className="infoItem">
          <div className="labelItem">Tests realizados:</div>
          <div className="inputItem boxShadow">43</div>
        </div> 
               
        <div className="infoItem">
          <div className="labelItem">Porcentaje de acierto:</div>
          <div className="inputItem boxShadow">76.2%</div>
        </div>   
             
        <div className="infoItem">
          <div className="labelItem">Preguntas totales:</div>
          <div className="inputItem boxShadow">320</div>
        </div>
        <div className="infoItem">
          <div className="labelItem">Preguntas realizadas:</div>
          <div className="inputItem boxShadow">764</div>
        </div> 
               
        <div className="infoItem">
          <div className="labelItem">Preguntas acertadas:</div>
          <div className="inputItem boxShadow">402</div>
        </div>   
             
        <div className="infoItem">
          <div className="labelItem">Preguntas falladas:</div>
          <div className="inputItem boxShadow">362</div>
        </div>

        <div className="infoItem">
          <div className="labelItem">Autor de la colección:</div>
          <div className="inputItem boxShadow">Daniel Fernández Varona</div>
        </div>

        <div className="infoItem">
          <div className="labelItem">Fecha de creación:</div>
          <div className="inputItem boxShadow">28/01/2024</div>
        </div> 
               
        <div className="infoItem">
          <div className="labelItem">Última edición:</div>
          <div className="inputItem boxShadow">01/02/2024</div>
        </div>  
              
      </div>



    </Container>


  )
}