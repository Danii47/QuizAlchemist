import "./EditPage.css"
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"
import { Tree } from 'primereact/tree'
import { ToggleButton } from 'primereact/togglebutton'

export default function EditPage({ collectionSelected }) {

  const [collectionNameEditing, setCollectionNameEditing] = useState(false)

  const [editPageNodes, setEditPageNodes] = useState([{
    key: "0",
    label: `${collectionSelected.name} [${collectionSelected.themes.length}]`,
    icon: undefined,
    children: collectionSelected.themes.map((theme, themeKey) => {

      return {

        key: `0-${themeKey}`,
        label: (
          <div className="editTreeContainer">
            [{themeKey + 1}]
            <input className="editTreeInput" type="text" defaultValue={`${theme.name} (${theme.questions.length})`} />
          </div>
        ),
        children: theme.questions.map((questionObject, questionObjectKey) => {

          return {

            key: `0-${themeKey}-${questionObjectKey}`,
            label: (
              <div className="editTreeContainer">
                [{questionObjectKey + 1}]
                <input className="editTreeInput" type="text" defaultValue={`${questionObject.question}`} />
              </div>
            ),
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
                    <input className="editTreeInput" defaultValue={`${answerObject.label}`} />
                  </div>
                )

              }
            })

          }
        })
      }

    })
  }])


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

      <Tree value={editPageNodes} />




    </div>
  )
}