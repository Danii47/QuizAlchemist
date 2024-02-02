import "./InfoPage.css"
import { Tree } from 'primereact/tree'
import { Container, Col, Row } from "react-bootstrap"
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
      <Row>

        <Col>

          <Row className="treeContainer rounded" >
            <Tree value={nodes} className="w-full md:w-30rem justify-content-center p-0" />
          </Row>

        </Col>
        <Col>
          <Row>Hola</Row>
          <Row>Adios</Row>
        </Col>

      </Row>


    </Container>


  )
}