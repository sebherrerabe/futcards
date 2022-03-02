import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="rectangle">
        <div className="top-container">
            <div className="wrap">
          <div className="left-top">
            <div className="rating-container">
              <p className="rating">97</p>
              <p className="position">CAM</p>
            </div>
            <div className="country-container">
              <div className="country-flag"></div>
            </div>
          </div>
          <div className="stadium">
            <div className="right-top">
              <div className="space-top"></div>
              <div className="player-head"></div>
            </div>
          </div>
          </div>
          <div className="separador1"></div>
        </div>
        <div className="names-container">
            <div className="wrap2">
          <h3 className="player-name">MARADONA</h3>
          </div>
          <div className="separador2"></div>
        </div>
        <div className="field">
          <div className="bottom-container">
            <div className="space-top-stats"></div>
            <div className="stats">
              <table>
                <tr>
                  <td>97 <span className="att-stat">PAC</span></td>
                  <td>97 <span className="att-stat">DRI</span></td>
                </tr>
                <tr>
                  <td>93 <span className="att-stat">SHO</span></td>
                  <td>40 <span className="att-stat">DEF</span></td>
                </tr>
                <tr>
                  <td>92 <span className="att-stat">PAS</span></td>
                  <td>76 <span className="att-stat">PHY</span></td>
                </tr>
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
