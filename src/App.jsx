import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import { db } from "./firebase.js"
import { set, ref,get } from "firebase/database"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'primeicons/primeicons.css'

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
      <HomePage />
    </>
  )
}

export default App
