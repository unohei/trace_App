import { useState } from "react";
import { questionStyles as styles } from "../ui/question.styles";

function NorthStar({ origin }) {
  const [open, setOpen] = useState(false);

  // 表示用（未設定でも落ちない）
  const joy = origin?.joy ?? "";
  const stubborn = origin?.stubborn ?? "";
  const immerse = origin?.immerse ?? "";

  const labelStyle = {
    fontSize: 11,
    letterSpacing: "0.06em",
    opacity: 0.7,
    margin: "10px 0 6px",
    whiteSpace: "nowrap",
  };

  const valueStyle = {
    margin: 0,
    padding: "10px 12px",
    borderRadius: 12,
    background: "rgba(0,0,0,0.28)",
    border: "1px solid rgba(255,255,255,0.08)",
    lineHeight: 1.7,
    fontSize: 13,
    opacity: 0.92,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  };

  return (
    <div style={styles.northStarWrapper}>
      {/* button化しても“点”は維持するロジック */}
      <button
        type="button"
        aria-label="原点を表示"
        onClick={() => setOpen((v) => !v)}
        style={{
          ...styles.northStar,
          border: "none",
          padding: 0,
        }}
      />

      {open && (
        <div style={styles.originPopover} onClick={(e) => e.stopPropagation()}>
          <p style={styles.originTitle}>✦ 今のあなたの原点</p>

          <ul style={styles.originList}>
            <li>
              <div style={labelStyle}>
                人生で最も「ワクワク」したと感じたこと
              </div>
              <p style={valueStyle}>{joy || "（未入力）"}</p>
            </li>

            <li>
              <div style={labelStyle}>
                怒られてもやりたい（やりたくない）こと
              </div>
              <p style={valueStyle}>{stubborn || "（未入力）"}</p>
            </li>

            <li>
              <div style={labelStyle}>とても長く没頭できること</div>
              <p style={valueStyle}>{immerse || "（未入力）"}</p>
            </li>
          </ul>

          <div
            style={{
              marginTop: 10,
              fontSize: 11,
              opacity: 0.55,
              textAlign: "right",
            }}
          >
            もう一度星を押すと閉じます
          </div>
        </div>
      )}
    </div>
  );
}

export default NorthStar;
