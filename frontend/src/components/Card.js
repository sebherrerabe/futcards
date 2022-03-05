import React from "react";
import "./Card.css";
import styles from "./assets/countriescolours.module.css"


const Card = ({ player }) => {  
  let conClasses
  if (player.country === "br") {
 conClasses = `${styles.brContainer} card-container`
  } else {
    conClasses = "card-container"
  }
  return (
    <div className={conClasses}  key={ player.id }>
      <div className="rectangle">
        <div className="top-container">
          <div className="wrap">
            <div className="left-top">
              <div className="con-1">
                <div className="con-2">
                  <div className="rating-container">
                    <p className="rating">{player.rating}</p>
                    <p className="position">
                      {player.position.toUpperCase()}
                    </p>
                  </div>
                  <div className="country-container">
                    <div
                      className="country-flag"
                      style={{ backgroundImage: `url("https://countryflagsapi.com/png/${player.country}")` }}
                    >
                    </div>
                  </div>
                </div>
                <div className="separador3"></div>
              </div>
              <div className="separador1-a"></div>
            </div>
            <div className="stadium">
              <div className="right-top">
                <div className="space-top"></div>
                <div
                  className="player-head"
                  style={{ backgroundImage: `url(${player.img})` }}
                >
                  <div className="separador1-b"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="names-container">
          <div className="wrap2">
            <h3 className="player-name">{player.name.toUpperCase()}</h3>
          </div>
          <div className="separador2"></div>
        </div>
        <div className="field">
          <div className="bottom-container">
            <div className="space-top-stats"></div>
            <div className="stats">
              <table>
                <tbody>
                  <tr>
                    <td>
                      {player.pace} <span className="att-stat">PAC</span>
                    </td>
                    <td>
                      {player.dribbling}{" "}
                      <span className="att-stat">DRI</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {player.shooting}{" "}
                      <span className="att-stat">SHO</span>
                    </td>
                    <td>
                      {player.defense}{" "}
                      <span className="att-stat">DEF</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {player.passing}{" "}
                      <span className="att-stat">PAS</span>
                    </td>
                    <td>
                      {player.physical}{" "}
                      <span className="att-stat">PHY</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="logo-container">
              <div className="logo"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
