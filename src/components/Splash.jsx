import "./Splash.css";

function Splash({ onFinish }) {
  return (
    <main style={styles.container} onClick={onFinish}>
      <Moon />
      <NorthStar />
      <h1 style={styles.logo}>TRACE</h1>
      <p style={styles.copy}>
        迷いは消えない。
        <br />
        でも、軌跡は残る。
      </p>
    </main>
  );
}

// 月コンポーネント
function Moon() {
  return <div style={styles.moon} />;
}

// 北極星コンポーネント
function NorthStar() {
  return <div style={styles.northStar} />;
}

// スタイル
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "24px",
    background: "radial-gradient(circle at top, #1b2735, #090a0f)",
    color: "#eaeaea",
    position: "relative",
    cursor: "pointer",
  },

  logo: {
    fontSize: "32px",
    letterSpacing: "0.2em",
    marginBottom: "24px",
  },

  copy: {
    fontSize: "18px",
    lineHeight: 1.8,
    opacity: 0.85,
  },

  moon: {
    position: "absolute",
    top: "10%",
    right: "15%",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.08)",
    boxShadow: "0 0 40px rgba(255, 255, 255, 0.15)",
  },
  northStar: {
    position: "absolute",
    top: "18%",
    left: "20%",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.9)",
    boxShadow: `
    0 0 6px rgba(255,255,255,0.8),
    0 0 12px rgba(255,255,255,0.4)
  `,
    animation: "northStarGlow 3s ease-in-out infinite",
  },
};

export default Splash;
