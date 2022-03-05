import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="rectangle">
          <div className="top-container">
            <div className="wrap">
              <div className="left-top">
                <div className="con-1">
                <div className="con-2">
                <div className="rating-container">
                  <p className="rating">{this.props.player.rating}</p>
                  <p className="position">
                    {this.props.player.position.toUpperCase()}
                  </p>
                </div>
                <div className="country-container">
                  <div className="country-flag" style={{ backgroundImage: `url("https://countryflagsapi.com/png/${this.props.player.country}")` }} ></div>
                </div>
                </div>
                <div className="separador3"></div>
                </div>
                <div className="separador1-a"></div>
              </div>
              <div className="stadium">
                <div className="right-top">
                  <div className="space-top"></div>
                  <div className="player-head" style={{ backgroundImage: `url(${this.props.player.img})` }}>
                    <div className="separador1-b"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="names-container">
            <div className="wrap2">
              <h3 className="player-name">
                {this.props.player.name.toUpperCase()}
              </h3>
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
                        {this.props.player.pace}{" "}
                        <span className="att-stat">PAC</span>
                      </td>
                      <td>
                        {this.props.player.dribbling}{" "}
                        <span className="att-stat">DRI</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {this.props.player.shooting}{" "}
                        <span className="att-stat">SHO</span>
                      </td>
                      <td>
                        {this.props.player.defense}{" "}
                        <span className="att-stat">DEF</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {this.props.player.passing}{" "}
                        <span className="att-stat">PAS</span>
                      </td>
                      <td>
                        {this.props.player.physical}{" "}
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
  }
}

export default Card;
