import { useState } from "react";
import { questionStyles as styles } from "../ui/question.styles";

function NorthStar({ origin }) {
  const [open, setOpen] = useState(false);

  // origin がまだ無い場合は表示しない（保険）
  if (!origin) return null;

  return (
    <div style={styles.northStarWrapper}>
      {/* 北極星そのもの */}
      <div
        style={styles.northStar}
        onClick={() => setOpen(!open)}
        title="原点を見る"
      />

      {/* 原点ポップオーバー */}
      {open && (
        <div style={styles.originPopover}>
          <p style={styles.originTitle}>✦ 原点</p>

          <ul style={styles.originList}>
            <li>
              <strong>ワクワク</strong>
              <br />
              {origin.joy}
            </li>
            <li>
              <strong>怒られても</strong>
              <br />
              {origin.stubborn}
            </li>
            <li>
              <strong>没頭</strong>
              <br />
              {origin.immerse}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NorthStar;
