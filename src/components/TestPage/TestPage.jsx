import "./TestPage.css"
import SelectMultiple from "../SelectMultiple/SelectMultiple"
import { toTitleCase } from "../../utils/pipes/toTitleCase"
import { InputNumber } from 'primereact/inputnumber';
import { ToggleButton } from 'primereact/togglebutton';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';


import { useState, useEffect } from 'react'
import "primereact/resources/themes/lara-light-green/theme.css"



export default function TestPage({ collectionSelected }) {

  const [nQuestions, setNQuestions] = useState(0)

  const [examMode, setExamMode] = useState(false)

  const [selectedThemes, setSelectedThemes] = useState([])

  const [maxNQuestion, setMaxNQuestions] = useState(0)

  const getMaxNumberQuestions = (selectedThemes) => {
    let maxNumber = 0;
    selectedThemes.forEach((theme) => {
      maxNumber += theme.questionsLength
    })

    return maxNumber
  }

  useEffect(() => {

    const maxQuestions = getMaxNumberQuestions(selectedThemes)

    setMaxNQuestions(maxQuestions)

    setNQuestions((maxQuestions > 30) ? 30 : maxQuestions)

  }, [selectedThemes])

  const handleChangeSelectedThemes = (selectedOption) => {
    setSelectedThemes(selectedOption)
  }

  return (

    <form className="testForm">

      <div className="selectMultipleContainer">
        <label className="selectMultipleLabel" htmlFor="selectInput">
          Temas a incluir en el test de {toTitleCase(collectionSelected.name)}:
        </label>
        <div className="selectMultipleInput">
          <SelectMultiple themes={collectionSelected.themes} handleChangeSelectedThemes={handleChangeSelectedThemes} selectedThemes={selectedThemes} />
        </div>
      </div>

      <div className="bottomRow">

        <div className="nQuestionsContainer">
          <label htmlFor="nQuestionsInput" className="nQuestionsLabel">
            Número de preguntas:
          </label>
          <InputNumber inputId="nQuestionsInput" className="nQuestionsInput" value={nQuestions} onValueChange={(e) => setNQuestions(e.value)} prefix=" " showButtons min={0} max={maxNQuestion} />
        </div>

        <div className="examModeContainer">
          {/*<label htmlFor="examModeCheckbox">
            Modo Examen:
  </label>*/}
          <ToggleButton className="btnExamMode" tooltip="Selecciona el modo del test" tooltipOptions={{showDelay: 800, mouseTrack: true, mouseTrackTop: -35, mouseTrackLeft: -90}} onLabel="Modo examen" offLabel="Modo estudio" onIcon={<ChecklistRtlIcon/>} offIcon={<AutoStoriesIcon/>}
            checked={examMode} onChange={(e) => setExamMode(e.value)} />
          {/* <Checkbox inputId="examModeCheckbox" onChange={(e) => setExamMode(e.checked)} checked={examMode}></Checkbox> */}
        </div>

      </div>


    </form>

  )
}