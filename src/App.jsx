import './App.css'
import {db} from "./firebase.js"
import {set,ref} from "firebase/database"


function App() {

  console.log('Holaaaa')

  const writeToDatabase = () =>{
    const uid = "prueba1";
    const userRef = ref(db,uid)
    const userData = {
      prueba: 'hola'
    }
    set(userRef, userData)
  }

  return (
    <>
      <button onClick={writeToDatabase()}>Test</button>
      
    </>
  )
}

export default App
