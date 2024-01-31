import Select from "react-select";
import { useState } from "react"

const options = [
  { value: "rojo", label: "rojo" },
  { value: "azul", label: "azul" },
  { value: "verde", label: "verde" },
  { value: "blanco", label: "blanco" }
];

export default function SelectMultiple({ themes }) {

  const [selectedTheme, setSelectedTheme] = useState()
  const handleChange = (selectedOption) => {
    setSelectedTheme(selectedOption)
  }


  const themesNames = themes.map((theme, key) => {
    return { label: theme.name, value: key }
  })

  return (
    <Select
      isMulti
      options={themesNames}
      value={selectedTheme}
      onChange={handleChange}
      closeMenuOnSelect={false}
      placeholder="Seleccione los temas..."
    />
  )

}