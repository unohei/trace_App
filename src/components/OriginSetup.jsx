import { useState } from "react";
import { originStyles as styles } from "../ui/origin.styles";

function OriginSetup({ onComplete }) {
  const [origin, setOrigin] = useState({
    joy: "",
    stubborn: "",
    immerse: "",
  });

  const isComplete =
    origin.joy.trim() && origin.stubborn.trim() && origin.immerse.trim();

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>原点を置く</h2>

        <p style={styles.lead}>
          すぐに答えが出なくても大丈夫。
          <br />
          今のあなたが思う「原点」でいい。
        </p>

        {/* ① ワクワク */}
        <label style={styles.label}>人生で最も「ワクワク」したこと</label>
        <textarea
          style={styles.textarea}
          value={origin.joy}
          onChange={(e) => setOrigin({ ...origin, joy: e.target.value })}
          placeholder="あの時の、時間を忘れることができないこと"
        />

        {/* ② 怒られてもやりたい */}
        <label style={styles.label}>
          怒られてもやりたい（やりたくない）こと
        </label>
        <textarea
          style={styles.textarea}
          value={origin.stubborn}
          onChange={(e) => setOrigin({ ...origin, stubborn: e.target.value })}
          placeholder="理屈より先に、体が動いたこと"
        />

        {/* ③ 没頭できる */}
        <label style={styles.label}>とても長く没頭できること</label>
        <textarea
          style={styles.textarea}
          value={origin.immerse}
          onChange={(e) => setOrigin({ ...origin, immerse: e.target.value })}
          placeholder="気づいたら夜になっていたこと"
        />

        <button
          style={{
            ...styles.button,
            opacity: isComplete ? 1 : 0.4,
          }}
          disabled={!isComplete}
          onClick={() => onComplete(origin)}
        >
          原点を置く
        </button>
      </div>
    </main>
  );
}

export default OriginSetup;
