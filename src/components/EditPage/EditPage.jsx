import "./EditPage.css"
import LockIcon from '@mui/icons-material/Lock'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import { useState, useRef } from "react"
import { Tree } from 'primereact/tree'
import { ToggleButton } from 'primereact/togglebutton'

export default function EditPage({ collectionSelected }) {


  const [collectionNameEditing, setCollectionNameEditing] = useState(false)

  const collectionNameInputRef = useRef()
  const themeNameInputRef = useRef([])
  const questionInputRef = useRef([])
  const answerInputRef = useRef([])


  const [editPageNodes, setEditPageNodes] = useState([{
    key: "0",
    label: (
      <div className="editTreeContainer">
        <input className="editTreeInput" type="text" onChange={(e) => handleCollectionNameChange(e.target.value)} ref={collectionNameInputRef} defaultValue={`${collectionSelected.name}`} disabled={!collectionNameEditing} />
      </div>
    ),
    children: collectionSelected.themes.map((theme, themeKey) => {

      return {

        key: `0-${themeKey}`,
        label: (
          <div className="editTreeContainer">
            [{themeKey + 1}]
            <input className="editTreeInput" type="text" onChange={(e) => handleThemeNameChange(themeKey, e.target.value)} ref={(element) => themeNameInputRef.current.push(element)} defaultValue={`${theme.name}`} disabled={!collectionNameEditing} />
          </div>
        ),
        inputValue: theme.name,
        children: theme.questions.map((questionObject, questionObjectKey) => {

          return {

            key: `0-${themeKey}-${questionObjectKey}`,
            label: (
              <div className="editTreeContainer">
                [{questionObjectKey + 1}]
                <input className="editTreeInput" type="text" onChange={(e) => handleQuestionChange(themeKey, questionObjectKey, e.target.value)} ref={(element) => questionInputRef.current.push(element)} defaultValue={`${questionObject.question}`} disabled={!collectionNameEditing} />
              </div>
            ),
            inputValue: questionObject.question,
            children: questionObject.answers.map((answerObject, answerObjectKey) => {

              return {

                key: `0-${themeKey}-${questionObjectKey}-${answerObjectKey}`,
                inputValue: answerObject.label,
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
                    <input className="editTreeInput" onChange={(e) => handleAnswerChange(themeKey, questionObjectKey, answerObjectKey, e.target.value)} ref={(element) => answerInputRef.current.push(element)} defaultValue={`${answerObject.label}`} disabled={!collectionNameEditing} />
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


    if (!e.value || !collectionNameEditing) return // Si el botón pasa a off, no hace nada

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

  const handleCollectionNameChange = (newName) => {

    setEditPageNodes((prevEditPageNodes) => {

      const newEditPageNodes = [...prevEditPageNodes]

      newEditPageNodes[0].inputValue = newName

      return newEditPageNodes

    })

  }

  const handleThemeNameChange = (themeKey, newName) => {

    setEditPageNodes((prevEditPageNodes) => {

      const newEditPageNodes = [...prevEditPageNodes]


      newEditPageNodes[0].children[themeKey].inputValue = newName

      return newEditPageNodes

    })

  }

  const handleQuestionChange = (themeKey, questionObjectKey, newName) => {

    setEditPageNodes((prevEditPageNodes) => {

      const newEditPageNodes = [...prevEditPageNodes]

      newEditPageNodes[0].children[themeKey].children[questionObjectKey].inputValue = newName

      return newEditPageNodes

    })

  }

  const handleAnswerChange = (themeKey, questionObjectKey, answerObjectKey, newName) => {

    setEditPageNodes((prevEditPageNodes) => {

      const newEditPageNodes = [...prevEditPageNodes]

      newEditPageNodes[0].children[themeKey].children[questionObjectKey].children[answerObjectKey].inputValue = newName

      return newEditPageNodes

    })

  }

  const handleLockClick = () => {
    collectionNameInputRef.current.disabled = collectionNameEditing
    themeNameInputRef.current = themeNameInputRef.current.map((element) => {
      element.disabled = collectionNameEditing
      return element
    })
    questionInputRef.current = questionInputRef.current.map((element) => {
      element.disabled = collectionNameEditing
      return element
    })
    answerInputRef.current = answerInputRef.current.map((element) => {
      element.disabled = collectionNameEditing
      return element
    })

    setCollectionNameEditing(!collectionNameEditing)
  }


  return (
    <div className="editPage">

      <div className="editItemContainer">
        <div className="editItemLabel">Nombre de la colección</div>
        <ToggleButton
          onIcon={<LockIcon />}
          offIcon={<LockOpenIcon />}
          checked={!collectionNameEditing}
          onLabel={null}
          offLabel={null}
          className={`editItemIconContainer ${collectionNameEditing}`}
          onChange={handleLockClick}
        />
      </div>
      <Tree value={editPageNodes} />
    </div>
  )
}