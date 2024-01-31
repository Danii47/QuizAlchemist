import "./SideNav.css"
import CollectionList from "../CollectionList/CollectionList"
import TestPage from "../TestPage/TestPage"
import InfoPage from "../InfoPage/InfoPage"
import EditPage from "../EditPage/EditPage"
import { Modal, Button } from "react-bootstrap"
import { useState } from "react"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"

export default function SideNav() {

  const collection = [{
    id: "001",
    name: "MATEMÁTICAS",
    color: "#29F",
    themes: [
      {
        name: "Tema 1",
        questions: [
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          },
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          },
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          }
        ]
      },
      {
        name: "Tema 2",
        questions: [
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          },
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          },
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          }
        ]
      }
    ]

  },
  {
    id: "002",
    name: "LENGUA",
    color: "#EB4930",
    themes: [
      {
        name: "Tema 1",
        questions: [
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          },
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          },
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          }
        ]
      },
      {
        name: "Tema 2",
        questions: [
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          },
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          },
          {
            question: "¿Qué orientación sexual tiene Dani?",
            answer: "Es maricón perdido"
          }
        ]
      }
    ]
  }
  ]

  const collections = [
    ...collection,
    ...collection,
    ...collection,
    ...collection,
    ...collection,

  ]

  const [showModal, setShowModal] = useState(false)
  const [pageId, setPageId] = useState(1)
  const [collectionSelected, setCollectionSelected] = useState()

  

  const handleSelectCollection = (collection) => {
    setCollectionSelected(collection)
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
    restartPageId()
  }

  const restartPageId = () => setPageId(1)

  return (
    <div className="sidenavContainer">
      <div className="divider"></div>

      <CollectionList className="collectionsList" handleSelectCollection={handleSelectCollection} collections={collections} />

      <Modal show={showModal} onHide={handleHideModal} backdrop="static" centered>
        <Modal.Header>
          {/* <Modal.Title>Modal heading</Modal.Title> */}

          <BottomNavigation
            showLabels
            value={pageId}
            onChange={(_, newPageId) => {
              setPageId(newPageId)
            }}
            className="modalNavigation"
          >
            <BottomNavigationAction label="Test" />
            <BottomNavigationAction label="Información" />
            <BottomNavigationAction label="Editar" />
          </BottomNavigation>

        </Modal.Header>
        <Modal.Body>

          {
            (pageId === 0) && <TestPage collectionSelected={collectionSelected} />
          }
          {
            (pageId === 1) && <InfoPage collectionSelected={collectionSelected} />
          }
          {
            (pageId === 2) && <EditPage collectionSelected={collectionSelected} />
          }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleHideModal}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}