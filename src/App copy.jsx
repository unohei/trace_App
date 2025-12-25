import { useState } from "react";

function App() {
  const [isSplash, setIsSplash] = useState(true);
  const [answer, setAnswer] = useState("");

  // --- Splash（起動時） ---
  if (isSplash) {
    return (
      <main style={styles.container} onClick={() => setIsSplash(false)}>
        <Moon />

        <h1 style={styles.logo}>TRACE</h1>

        <p style={styles.copy}>
          迷いは消えない。
          <br />
          でも、軌跡は残る。
        </p>
      </main>
    );
  }

  // --- 次の画面（仮） ---
  return (
    <main style={styles.next}>
      <div style={styles.card}>
        <h2 style={styles.questionTitle}>今週の問い</h2>

        <p style={styles.question}>先週の自分と比べて、どうでしたか？</p>

        <textarea
          style={styles.textarea}
          placeholder="今の気持ちを、そのまま"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <div style={styles.hint}>
          <span style={styles.hintTitle}>☾ 月明かり</span>
          <p style={styles.hintText}>
            変化が小さくても、それは進化かもしれません
          </p>
        </div>

        <button style={styles.saveButton} disabled={!answer.trim()}>
          記録する
        </button>
      </div>
    </main>
  );
}

// 月コンポーネント
function Moon() {
  return <div style={styles.moon} />;
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

  next: {
    minHeight: "100vh",
    background: "#0b0e14",
    color: "#eaeaea",
    padding: "48px 24px",
  },

  questionTitle: {
    fontSize: "14px",
    letterSpacing: "0.15em",
    opacity: 0.6,
    marginBottom: "16px",
  },

  question: {
    fontSize: "20px",
    lineHeight: 1.8,
  },
  card: {
    maxWidth: "480px",
    margin: "0 auto",
  },

  textarea: {
    width: "100%",
    minHeight: "120px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "12px",
    color: "#eaeaea",
    fontSize: "16px",
    lineHeight: 1.6,
    marginBottom: "24px",
  },

  hint: {
    marginBottom: "32px",
    opacity: 0.8,
  },

  hintTitle: {
    fontSize: "12px",
    letterSpacing: "0.15em",
    display: "block",
    marginBottom: "8px",
  },

  hintText: {
    fontSize: "14px",
    lineHeight: 1.6,
  },

  saveButton: {
    width: "100%",
    padding: "12px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "#eaeaea",
    borderRadius: "24px",
    cursor: "pointer",
  },
};

export default App;
