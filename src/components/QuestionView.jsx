import { useMemo, useState } from "react";
import { questionStyles as styles } from "../ui/question.styles";
import NorthStar from "./NorthStar";
import StepHistory from "./StepHistory";
import { interpretDistance } from "../utils/originDistance";

function QuestionView({ origin }) {
  const [answer, setAnswer] = useState("");
  const [steps, setSteps] = useState([]);

  // input | after | history
  const [phase, setPhase] = useState("input");
  const [fadeOut, setFadeOut] = useState(false);

  // 0:近い 1:中間 2:遠い（評価ではなく現在地）
  const [distanceBand, setDistanceBand] = useState(1);

  // バンド → 仮距離（interpretDistanceに渡す）
  const distanceValue = useMemo(() => {
    const table = [1.2, 3.2, 6.0];
    return table[Math.max(0, Math.min(2, distanceBand))];
  }, [distanceBand]);

  const interpretation = useMemo(
    () => interpretDistance(distanceValue),
    [distanceValue]
  );

  const getAfterMessage = (band) => {
    if (band === 0) {
      return "原点のすぐそば。\n確かめるように、静かに歩いた週でした。";
    }
    if (band === 1) {
      return "少し外側に出た一歩。\n迷いと一緒に、ちゃんと進めた週でした。";
    }
    return "遠くまで来た一歩。\n今週の経験は、きっと力になります。";
  };

  const resetForNextWeek = () => {
    setAnswer("");
    setFadeOut(false);
    setPhase("input");
  };

  return (
    <main style={styles.next}>
      <NorthStar origin={origin} />

      {/* ===== 入力フェーズ ===== */}
      {phase === "input" && (
        <>
          {/* 距離メーター（言葉で置く） */}
          <div style={styles.distanceBox}>
            <p style={styles.distanceLabel}>今の距離感</p>

            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 8,
                marginBottom: 10,
              }}
            >
              {[
                { label: "原点のすぐそば", band: 0 },
                { label: "少し外側", band: 1 },
                { label: "遠くまで来た", band: 2 },
              ].map((item) => {
                const active = item.band === distanceBand;
                return (
                  <button
                    key={item.band}
                    type="button"
                    onClick={() => setDistanceBand(item.band)}
                    style={{
                      flex: 1,
                      padding: "10px 10px",
                      borderRadius: 16,
                      border: active
                        ? "1px solid rgba(255,255,255,0.45)"
                        : "1px solid rgba(255,255,255,0.18)",
                      background: active
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(255,255,255,0.03)",
                      color: "rgba(255,255,255,0.9)",
                      fontSize: 12,
                      opacity: active ? 1 : 0.75,
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <p style={styles.distanceMessage}>{interpretation.message}</p>

            <p style={{ fontSize: 11, opacity: 0.45, marginTop: 10 }}>
              ※ 近い・遠いに正解はありません。今の位置を置くだけです。
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.questionTitle}>今週の問い</h2>
            <p style={styles.question}>先週の自分と比べて、どうでしたか？</p>

            <textarea
              style={styles.textarea}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="今の気持ちを、そのまま"
            />

            <button
              style={styles.saveButton}
              disabled={!answer.trim()}
              onClick={() => {
                const newStep = {
                  id: Date.now(),
                  createdAt: new Date().toLocaleString(),
                  answer: answer.trim(),

                  // 履歴で使う
                  distanceBand,
                  distanceValue,
                  distanceLabel: interpretation.label,
                  distanceMessage: interpretation.message,
                };

                setSteps((prev) => [...prev, newStep]);
                setPhase("after");

                setTimeout(() => setFadeOut(true), 3500);
                setTimeout(() => setPhase("history"), 5200);
              }}
            >
              記録する
            </button>
          </div>
        </>
      )}

      {/* ===== 余韻フェーズ ===== */}
      {phase === "after" && (
        <div
          style={{
            ...styles.afterSave,
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 1.5s ease",
            textAlign: "center",
            marginTop: 40,
            whiteSpace: "pre-line",
          }}
        >
          <p style={{ fontSize: 18, marginBottom: 12 }}>
            {interpretation.label}
          </p>
          <p style={{ opacity: 0.8 }}>{getAfterMessage(distanceBand)}</p>
        </div>
      )}

      {/* ===== 履歴フェーズ ===== */}
      {phase === "history" && (
        <>
          {/* ★ 常に見える「次の一歩」 */}
          <div style={styles.historyTopBar}>
            <button style={styles.historyButton} onClick={resetForNextWeek}>
              次の一歩を残す
            </button>
          </div>

          <StepHistory steps={steps} />
        </>
      )}
    </main>
  );
}

export default QuestionView;
