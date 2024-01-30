import "./HomePage.css";

import Toolbar from '../../components/Toolbar/Toolbar'
import SideNav from '../../components/SideNav/SideNav'
import Main from '../../components/Main/Main'


export default function HomePage() {
  return (
    <>
      <Toolbar />
      <div className='bottomContainer'>
        <SideNav className="sidenavContainer" />
        <Main className="mainContainer" />
      </div>
    </>
  )
}