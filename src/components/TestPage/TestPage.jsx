import "./TestPage.css"
import SelectMultiple from "../SelectMultiple/SelectMultiple"
import { toTitleCase } from "../../utils/pipes/toTitleCase"
import { InputNumber } from 'primereact/inputnumber';
import { Checkbox } from 'primereact/checkbox';

import { useState, useEffect } from 'react'
import "primereact/resources/themes/lara-light-green/theme.css"



export default function TestPage({ collectionSelected, themesSelected }) {

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
    <>
      <form className="testForm">

        <div className="selectMultipleContainer">
          <label className="selectMultipleLabel">
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
            <label htmlFor="examModeCheckbox">
              Modo Examen:
            </label>
            <Checkbox inputId="examModeCheckbox" onChange={e => setExamMode(e.checked)} checked={examMode}></Checkbox>
          </div>

        </div>


      </form>

    </>
  )
}