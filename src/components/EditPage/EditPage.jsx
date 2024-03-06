import "./EditPage.css"
import LockIcon from '@mui/icons-material/Lock'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import { useState, useEffect } from "react"
import { Tree } from 'primereact/tree'
import { ToggleButton } from 'primereact/togglebutton'

export default function EditPage({ collectionSelected }) {


  const [collectionNameEditing, setCollectionNameEditing] = useState(false)



  const [editPageNodes, setEditPageNodes] = useState([])


  const handleChangeCorrectAnswer = (e, themeKey, questionObjectKey) => {


    if (!e.value) return // Si el botón pasa a off, no hace nada

    setEditPageNodes((prevEditPageNodes) => {

      const newEditPageNodes = [...prevEditPageNodes]

      newEditPageNodes[0].children[themeKey].children[questionObjectKey].children.forEach((answerObject, answerObjectKey) => {

        if (answerObjectKey === e.target.id) {

          answerObject.label = <div className="editTreeContainer">
            <ToggleButton id={answerObjectKey} onIcon={<DoneIcon />} offIcon={<CloseIcon />} checked={true} onLabel={null} offLabel={null} className="answerToggleButton true" onChange={(e) => handleChangeCorrectAnswer(e, themeKey, questionObjectKey)} />
            <input className="editTreeInput" defaultValue={`${answerObject.answerLabel}`} />
          </div>

          answerObject.correct = true

        } else {

          answerObject.label = <div className="editTreeContainer">
            <ToggleButton id={answerObjectKey} onIcon={<DoneIcon />} offIcon={<CloseIcon />} checked={false} onLabel={null} offLabel={null} className="answerToggleButton false" onChange={(e) => handleChangeCorrectAnswer(e, themeKey, questionObjectKey)} />
            <input className="editTreeInput" defaultValue={`${answerObject.answerLabel}`} />
          </div>

          answerObject.correct = false

        }

      })

      return newEditPageNodes

    })
  }

  useEffect(() => {
  
    
    setEditPageNodes([{
      key: "0",
      label: (
        <div className="editTreeContainer">
          <input className="editTreeInput" type="text" defaultValue={`${collectionSelected.name} (${collectionSelected.themes.length})`} disabled={!collectionNameEditing} />
        </div>
      ),
      inputValue: collectionSelected.name,
      children: collectionSelected.themes.map((theme, themeKey) => {

        return {

          key: `0-${themeKey}`,
          label: (
            <div className="editTreeContainer">
              [{themeKey + 1}]
              <input className="editTreeInput" type="text" defaultValue={`${theme.name} (${theme.questions.length})`} disabled={!collectionNameEditing} />
            </div>
          ),
          inputValue: theme.name,
          children: theme.questions.map((questionObject, questionObjectKey) => {

            return {

              key: `0-${themeKey}-${questionObjectKey}`,
              label: (
                <div className="editTreeContainer">
                  [{questionObjectKey + 1}]
                  <input className="editTreeInput" type="text" defaultValue={`${questionObject.question}`} disabled={!collectionNameEditing} />
                </div>
              ),
              inputValue: questionObject.question,
              children: questionObject.answers.map((answerObject, answerObjectKey) => {

                return {

                  key: `0-${themeKey}-${questionObjectKey}-${answerObjectKey}`,
                  answerLabel: answerObject.label,
                  correct: answerObject.correct,
                  label: (
                    <div className="editTreeContainer">
                      <ToggleButton
                        id={answerObjectKey}
                        onIcon={<DoneIcon />}
                        offIcon={<CloseIcon />}
                        checked={answerObject.correct}
                        onLabel={null}
                        offLabel={null}
                        className={`answerToggleButton ${answerObject.correct}`}
                        onChange={(e) => handleChangeCorrectAnswer(e, themeKey, questionObjectKey)}
                      />
                      <input className="editTreeInput" defaultValue={`${answerObject.label}`} disabled={!collectionNameEditing} />
                    </div>
                  )

                }
              })

            }
          })
        }

      })
    }])
    // eslint-disable-next-line
  }, [collectionSelected, collectionNameEditing])


  return (
    <div className="editPage">

      <div className="editItemContainer">
        <div className="editItemLabel">Nombre de la colección</div>
        {/* <div className={`editItemIconContainer ${collectionNameEditing}`} onClick={() => setCollectionNameEditing(!collectionNameEditing)}>
          {
            !collectionNameEditing
              ? <EditIcon className="editItemIcon"/>
              : <DoneIcon className="editItemIcon"/>
          }
        </div> */}
        <ToggleButton
          onIcon={<LockIcon />}
          offIcon={<LockOpenIcon />}
          checked={!collectionNameEditing}
          onLabel={null}
          offLabel={null}
          className={`editItemIconContainer ${collectionNameEditing}`}
          onChange={() => setCollectionNameEditing(!collectionNameEditing)}
        />
      </div>
      <Tree value={editPageNodes} />
    </div>
  )
}