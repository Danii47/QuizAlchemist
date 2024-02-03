import "./EditPage.css"
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import { useState, useEffect } from "react"
import { Tree } from 'primereact/tree'


export default function EditPage({ collectionSelected }) {

  const [collectionNameEditing, setCollectionNameEditing] = useState(false)
  const [editPageNodes, setEditPageNodes] = useState([])

  
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
                    [{answerObjectKey + 1}]
                    <input className="editTreeInput" defaultValue={`${answerObject.label}`}/>
                  </div>,
                  icon: answerObject.correct ? "pi pi-fw pi-check" : "pi pi-times"
                }
              })
            }
          })
        }
      })
    }]
    
    // collectionSelected.themes.forEach((theme, key) => {
    //   newNodes[0].children.push({
    //     key: `0-${key}`, label: `[${key + 1}] ${theme.name} (${theme.questions.length})`, icon: undefined, children: [] 
    //   })
    //   theme.questions.forEach((questionObject, questionObjectKey) => {
    //     newNodes[0].children[key].children.push({
    //       key: `0-${key}-${questionObjectKey}`, label: `${questionObject.question}`, icon: undefined, children: questionObject.answers.map((answer, answerKey) => {
    //         return { key: `0-${key}-${questionObjectKey}-${answerKey}`, label: `${answer.label}`, icon: undefined } 
    //       })
    //     })
    //   })
    // })

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