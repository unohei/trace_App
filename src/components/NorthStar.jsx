import { useState } from "react";
import { questionStyles as styles } from "../ui/question.styles";

function NorthStar({ origin }) {
  const [open, setOpen] = useState(false);
  if (!origin) return null;

  return (
    <div style={styles.northStarWrapper}>
      <div
        style={styles.northStar}
        onClick={() => setOpen((o) => !o)}
        title="原点を見る"
      />

      {open && (
        <div style={styles.originPopover}>
          <p style={styles.originTitle}>✦ 今のあなたの原点</p>
          <ul style={styles.originList}>
            <li>
              <span>人生で最も「ワクワク」したこと。</span>
              <p>{origin.joy}</p>
            </li>
            <li>
              <span>怒られてもやりたい（やりたくない）こと</span>
              <p>{origin.stubborn}</p>
            </li>
            <li>
              <span>長く没頭できること</span>
              <p>{origin.immerse}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NorthStar;
