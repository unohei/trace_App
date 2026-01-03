// src/Splash.jsx
import "./Splash.css";

function Splash({ onFinish }) {
  return (
    <main className="splashRoot" onClick={onFinish}>
      {/* 背景演出 */}
      <div className="moon" aria-hidden="true" />
      <div className="northStar" aria-hidden="true" />

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
