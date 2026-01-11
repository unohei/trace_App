// src/components/Splash.jsx
import "./Splash.css";

function Splash({ onFinish, onGoHistory, onGoEditOrigin }) {
  const handleGoHistory = (e) => {
    e.stopPropagation();
    if (typeof onGoHistory === "function") onGoHistory();
  };

  const handleGoEditOrigin = (e) => {
    e.stopPropagation();
    if (typeof onGoEditOrigin === "function") onGoEditOrigin();
  };

  return (
    <main className="splashRoot" onClick={onFinish}>
      <button
        type="button"
        className="moonBtn"
        aria-label="履歴へ"
        onClick={handleGoHistory}
      />
      <button
        type="button"
        className="northStarBtn"
        aria-label="原点を編集"
        onClick={handleGoEditOrigin}
      />

      {/* 本文 */}
      <h1 className="splashLogo">TRACE</h1>

      <p className="splashCopy">
        迷いは消えない。
        <br />
        でも、軌跡は残る。
      </p>

      <p className="splashHint">クリックして、はじめる</p>
    </main>
  );
}

export default Splash;
