import React from "react";
import { cardContainerStyle } from "./assets/countriesconst";
import "./Card.css";




const Card = ({ player }) => {
  let styles = cardContainerStyle(player.country)
  console.log(styles.separadorNameLeft)
  return (
    <div className="card-container" style={styles.cardContainer} >
      <div className="rectangle" style={styles.rectangle}>
        <div className="top-container">
          <div className="wrap">
            <div className="left-top" style={styles.leftTop}>
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
                <div className="separador3" style={styles.separadortop} ></div>
              </div>
              <div className="separador1-a" style={styles.separadorNameLeft}></div>
            </div>
            <div className="stadium">
              <div className="right-top" style={styles.rightTop}>
                <div className="space-top"></div>
                <div
                  className="player-head"
                  style={{ backgroundImage: `url(${player.img})` }}
                >
                  <div className="separador1-b" style={styles.separadorNameRight}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="names-container" style={styles.namesContainer}>
          <div className="wrap2">
            <h3 className="player-name">{player.name.toUpperCase()}</h3>
          </div>
          <div className="separador2" style={styles.separadorNameBottom}></div>
        </div>
        <div className="field">
          <div className="bottom-container" style={styles.bottomContainer}>
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
