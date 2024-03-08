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
    name: "Fundamentos de organización de empresa",
    color: "#29F",
    themes: [
      {
        name: "El marketing I",
        questions: [
          {
            question: "El marketing empresarial se divide en: ",
            answers: [
              { label: "Con y sin ánimo de lucro", correct: false },
              { label: "De consummo e industrial", correct: true },
              { label: "Industrial y de servicios", correct: false },
            ]
          },
          {
            question: "Las dimensiones de una demanda son: ",
            answers: [
              { label: "Precio y calidad", correct: false },
              { label: "Tiempo, producto y mercado", correct: true },
              { label: "Producto y mercado", correct: false },
            ]
          },
          {
            question: "La autofinanciación es una fuente de financiacion",
            answers: [
              { label: "A largo plazo", correct: true },
              { label: "A corto plazo", correct: false },
              { label: "Depende del tipo de autofinanciación", correct: false },
            ]
          }
        ]
      },
      {
        name: "El marketing II",
        questions: [
          {
            question: "El marketing empresarial se divide en: ",
            answers: [
              { label: "Con y sin ánimo de lucro", correct: false },
              { label: "De consummo e industrial", correct: true },
              { label: "Industrial y de servicios", correct: false },
            ]
          },
          {
            question: "Las dimensiones de una demanda son: ",
            answers: [
              { label: "Precio y calidad", correct: false },
              { label: "Tiempo, producto y mercado", correct: true },
              { label: "Producto y mercado", correct: false },
            ]
          },
          {
            question: "La autofinanciación es una fuente de financiacion",
            answers: [
              { label: "A largo plazo", correct: true },
              { label: "A corto plazo", correct: false },
              { label: "Depende del tipo de autofinanciación", correct: false },
            ]
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