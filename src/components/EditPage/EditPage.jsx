import "./EditPage.css"
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react"
import { Tree } from 'primereact/tree'
import { ToggleButton } from 'primereact/togglebutton'

export default function EditPage({ collectionSelected }) {

  const [collectionNameEditing, setCollectionNameEditing] = useState(false)
  const [editPageNodes, setEditPageNodes] = useState([])


  const handleChangeCorrectAnswer = (e) => {
  
  
  }

  
  useEffect(() => {
    const newNodes = [{ 
      key: "0",
      label: `${collectionSelected.name} [${collectionSelected.themes.length}]`,
      icon: undefined,
      children: collectionSelected.themes.map((theme, themeKey) => {
        return {
          key: `0-${themeKey}`,
          label: <div className="editTreeContainer">
            [{themeKey + 1}]
            <input className="editTreeInput" type="text" defaultValue={`${theme.name} (${theme.questions.length})`} />
          </div>,
          icon: undefined,
          children: theme.questions.map((questionObject, questionObjectKey) => {
            return {
              key: `0-${themeKey}-${questionObjectKey}`,
              label: <div className="editTreeContainer">
                [{questionObjectKey + 1}]
                <input className="editTreeInput" type="text" defaultValue={`${questionObject.question}`} />
              </div>,
              icon: undefined,
              children: questionObject.answers.map((answerObject, answerObjectKey) => {
                return {
                  key: `0-${themeKey}-${questionObjectKey}-${answerObjectKey}`,
                  label: <div className="editTreeContainer">
                    <ToggleButton onIcon={<DoneIcon />} offIcon={<CloseIcon />} checked={answerObject.correct} onLabel={null} offLabel={null} onChange={(e) => handleChangeCorrectAnswer(e)}/>
                    {/* <ToggleButton className="btnExamMode" tooltip="Selecciona el modo del test" tooltipOptions={{showDelay: 800, mouseTrack: true, mouseTrackTop: -35, mouseTrackLeft: -90}} onLabel="Modo examen" offLabel="Modo estudio" onIcon={<ChecklistRtlIcon/>} offIcon={<AutoStoriesIcon/>}
            checked={examMode} onChange={(e) => setExamMode(e.value)} /> */}
                    <input className="editTreeInput" defaultValue={`${answerObject.label}`}/>
                  </div>,
                  icon: undefined
                }
              })
            }
          })
        }
      })
    }]

    setEditPageNodes(newNodes)
  }, [collectionSelected])
  
  return (
    <div className="editPage">
      <div className="gridLayoutEdit">
        <div className="editItem">
          <div className="editItemLabel">Nombre de la colección</div>
          <div className="editItemInfo">
            <input className="editItemInput" type="text" defaultValue={collectionSelected.name} disabled={!collectionNameEditing} />
            <div className={`editItemIcon ${collectionNameEditing}`} onClick={() => setCollectionNameEditing(!collectionNameEditing)}>
              {
                !collectionNameEditing
                  ? <EditIcon />
                  : <DoneIcon />
              }
              
            </div>
          </div>

        </div>
      </div>

      <Tree value={editPageNodes}/>




    </div>
  )
}