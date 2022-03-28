import React from "react";
import { cardContainerStyle } from "./assets/countriesconst";
import "./Card.css";

const Card = ({ player, handleClick, number, turn }) => {
  let styles = cardContainerStyle(player.country);
  // console.log(styles.separadorNameLeft)
  return (
    <>
      <div className="card-container" style={styles.cardContainer}>
        <div className="rectangle" style={styles.rectangle}>
          <div className="top-container">
            <div className="wrap">
              <div className="left-top" style={styles.leftTop}>
                <div className="con-1">
                  <div className="con-2">
                    <div className="rating-container">
                      { (turn && number === 1) || (!turn && number === 2) 
                        ? <p className="rating" onClick={() => handleClick("rating")}>{player.rating}</p>
                        : <p className="rating">{player.rating}</p>
                      }
                      <p className="position">
                        {player.position.toUpperCase()}
                      </p>
                    </div>
                    <div className="country-container">
                      <div
                        className="country-flag"
                        style={{
                          backgroundImage: `url("https://countryflagsapi.com/png/${player.country}")`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="separador3" style={styles.separadortop}></div>
                </div>
                <div
                  className="separador1-a"
                  style={styles.separadorNameLeft}
                ></div>
              </div>
              <div className="stadium">
                <div className="right-top" style={styles.rightTop}>
                  <div className="space-top"></div>
                  <div
                    className="player-head"
                    style={{ backgroundImage: `url(${player.img})` }}
                  >
                    <div
                      className="separador1-b"
                      style={styles.separadorNameRight}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="names-container" style={styles.namesContainer}>
            <div className="wrap2">
              <h3 className="player-name">{player.name.toUpperCase()}</h3>
            </div>
            <div
              className="separador2"
              style={styles.separadorNameBottom}
            ></div>
          </div>
          <div className="field">
            <div className="bottom-container" style={styles.bottomContainer}>
              <div className="space-top-stats"></div>
              <div className="stats">
                <table>
                  <tbody>
                    <tr>
                      { (turn && number === 1) || (!turn && number === 2) 
                        ? <td onClick={() => handleClick("pace")}>{player.pace} <span className="att-stat">PAC</span></td>
                        : <td>{player.pace} <span className="att-stat">PAC</span></td>
                      }
                      { (turn && number === 1) || (!turn && number === 2) 
                        ? <td onClick={() => handleClick("dribbling")}>{player.dribbling} <span className="att-stat">DRI</span></td>
                        : <td>{player.dribbling} <span className="att-stat">DRI</span></td>
                      }
                    </tr>
                    <tr>
                      { (turn && number === 1) || (!turn && number === 2) 
                        ? <td onClick={() => handleClick("shooting")}>{player.shooting} <span className="att-stat">SHO</span></td>
                        : <td>{player.shooting} <span className="att-stat">SHO</span></td>
                      }
                      { (turn && number === 1) || (!turn && number === 2) 
                        ? <td onClick={() => handleClick("defense")}>{player.defense} <span className="att-stat">DEF</span></td>
                        : <td>{player.defense} <span className="att-stat">DEF</span></td>
                      }
                    </tr>
                    <tr>
                      { (turn && number === 1) || (!turn && number === 2) 
                        ? <td onClick={() => handleClick("passing")}>{player.passing} <span className="att-stat">PAS</span></td>
                        : <td>{player.passing} <span className="att-stat">PAS</span></td>
                      }
                      { (turn && number === 1) || (!turn && number === 2) 
                        ? <td onClick={() => handleClick("physical")}>{player.physical} <span className="att-stat">PHY</span></td>
                        : <td>{player.physical} <span className="att-stat">PHY</span></td>
                      }
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
    </>
  );
};

export default Card;
