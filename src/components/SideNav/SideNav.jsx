import "./SideNav.css"
import CollectionList from "../CollectionList/CollectionList"
import TestPage from "../TestPage/TestPage"
import InfoPage from "../InfoPage/InfoPage"
import EditPage from "../EditPage/EditPage"
import { Modal, Button } from "react-bootstrap"
import { useState } from "react"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info'
import EditNoteIcon from '@mui/icons-material/EditNote'
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl'

export default function SideNav() {

  const collection = [{
    id: "001",
    name: "ANALISIS Y DISEÑO DE ALGORITMOS",
    color: "#29F",
    themes: [
      {
        name: "Algoritmos de ordenación",
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
        name: "Algoritmos de búsqueda",
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

      <Modal show={showModal} onHide={handleHideModal} backdrop="static" contentClassName="modalBody">
        <Modal.Header className="shadow-sm">
          <BottomNavigation
            showLabels={false}
            value={pageId}
            onChange={(_, newPageId) => {
              setPageId(newPageId)
            }}
            className="modalNavigation"
          >
            <BottomNavigationAction label="TEST" className="labelModalNavigation" icon={<ChecklistRtlIcon className="iconModalNavigation" />} />
            <BottomNavigationAction label="INFORMACIÓN" className="labelModalNavigation" icon={<InfoIcon className="iconModalNavigation" />} />
            <BottomNavigationAction label="EDITAR" className="labelModalNavigation" icon={<EditNoteIcon className="iconModalNavigation" />} />
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
          <Button variant="secondary" onClick={handleHideModal} className="buttonCancel">
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleHideModal} className="saveButton">
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}