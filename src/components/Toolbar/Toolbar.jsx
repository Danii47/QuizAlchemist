import "./Toolbar.css";
import QuizAlchemistLogo from "../../assets/quizAlchemistLogo.svg";
import UserInfo from "../UserInfo/UserInfo";


export default function Toolbar() {




  return (

    <div className="toolbarMenu">
      <div className="logoContainer">
        <img src={QuizAlchemistLogo} alt="" />
        <div className="logoName">Quiz Alchemist</div>
      </div>
      <UserInfo />
    </div>

  )
}