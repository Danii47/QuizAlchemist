import Select from "react-select"
import makeAnimated from "react-select/animated"
import "./SelectMultiple.css"

export default function SelectMultiple({ themes, handleChangeSelectedThemes, selectedThemes }) {


  const themesNames = themes.map((theme, key) => {
    return { label: theme.name, value: key, questionsLength: theme.questions.length }
  })

  return (
    <Select
      isMulti
      options={themesNames}
      value={selectedThemes}
      onChange={handleChangeSelectedThemes}
      closeMenuOnSelect={false}
      components={makeAnimated()}
      placeholder="Seleccione los temas..."
      inputId="selectInput"
      noOptionsMessage={() => (themes.length > 0) ? "Has seleccionado todos los temas disponibles" : "No hay temas"}
    />
  )

}