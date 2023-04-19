import "./Score.css"

const Score = ({ xScore, oScore, xTurnPlay, tie }) => {
    return (
        <div className="score">
          <span className={`x-score ${xTurnPlay === true ? "xScore" : ""}`}>
            X - {xScore}
          </span>
          <span className={`o-score ${xTurnPlay === false ? "oScore" : ""}`}>
            O - {oScore}
          </span>
          <span className={`o-tie ${tie > 0 ? "oTie" : ""}`}>Tie - {tie}</span>
        </div>
      );
    };

export default Score
