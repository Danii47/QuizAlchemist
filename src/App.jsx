import './App.css'
import {db} from "./firebase.js"
import {set,ref,get} from "firebase/database"


function App() {


  const writeToDatabase = () =>{
    const uid = "prueba1";
    const userRef = ref(db,uid)
    const userData = {
      prueba: 'hola',
      hoa: 'gergre'
    }
    set(userRef, userData)
  }

  const readInDatabase = () =>{
    const uid = "prueba1"
    const userRef = ref(db,uid)
    get(userRef).then((snapshot)=>{
      if(snapshot){
        if(snapshot.val().prueba){
          console.log(snapshot.val().prueba)
        }
      }
    })

    
  }

  return (
    <>
      <button onClick={readInDatabase()}>Test</button>
    </>
  )
}

export default App
