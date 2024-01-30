import './App.css'
import Collection from './components/Collection.jsx'
import { db } from "./firebase.js"
import { set, ref,get } from "firebase/database"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  const writeToDatabase = () => {
    const uid = "prueba1";
    const userRef = ref(db, uid)
    const userData = {
      prueba: 'hola'
    }
    set(userRef, userData)
  }

  

  return (
    <>
      {/* <button onClick={() => writeToDatabase()}>Test</button> */}
      <Collection title={"FOE"} numberOfQuestions={60} color={"#29f"} />
    </>
  )
}

export default App
