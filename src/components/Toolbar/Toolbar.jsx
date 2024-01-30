import "./Toolbar.css";
import QuizAlchemistLogo from "../../assets/quizAlchemistLogo.svg";
import UserInfo from "../UserInfo/UserInfo";


export default function Toolbar() {




  return (

    <div className="toolbarMenu">
      <img src={QuizAlchemistLogo} alt="" />
      <UserInfo />
    </div>

  )
}