import React,{ useState } from 'react';
import { faTv,faBookmark,faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"

function Header() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      
      history.push("/")
      console.log(currentUser.email)
    } catch {
      setError("Failed to log out")
    }
  }
    return (
        <header className="banner shinji">
        <div className="banner__contents">
          <button className="log-out-btn" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt}/></button>
          <h1 className="banner__title">Evangelion</h1>
          <div className="banner__buttons">
            <button className="banner__button"><FontAwesomeIcon icon={faTv} /></button>
            <button className="banner__button bookmark"><FontAwesomeIcon icon={faBookmark} /></button>
          </div>
          <h1 className="banner__description">
          Quinze anos após o Segundo Impacto, Shinji Ikari se junta ao NERV, grupo de seu pai, como um dos pilotos adolescentes de robôs gigantes que enfrentam os Anjos.
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
    )
}

export default Header;