import { useEffect, useMemo, useRef, useState } from "react";
import { questionStyles as styles } from "../ui/question.styles";
import NorthStar from "./NorthStar";
import StepHistory from "./StepHistory";
import { interpretDistance } from "../utils/originDistance";
import { recommendBand } from "../utils/recommendBand";

const STEPS_KEY = "trace_steps_v1";
const HISTORY_SCROLL_ID = "historyScrollArea";

function safeParse(raw) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function clampBand(band) {
  return Math.max(0, Math.min(2, band));
}

function QuestionView({ origin, onBackToSplash, initialPhase = "input" }) {
  const [answer, setAnswer] = useState("");
  const [steps, setSteps] = useState([]);

  // input | after | history
  const [phase, setPhase] = useState(initialPhase);
  const [fadeOut, setFadeOut] = useState(false);

  // 保存時に確定した余韻（after表示に使う）
  const [afterBand, setAfterBand] = useState(1);
  const [afterLabel, setAfterLabel] = useState("");
  const [afterMessage, setAfterMessage] = useState("");

  // 初回ロード完了フラグ
  const hasLoadedRef = useRef(false);

  // 起動時：steps を復元
  useEffect(() => {
    const raw = localStorage.getItem(STEPS_KEY);
    const restored = raw ? safeParse(raw) : [];
    setSteps(restored);
    hasLoadedRef.current = true;
  }, []);

  // steps 更新時：保存（初回ロード前は保存しない）
  useEffect(() => {
    if (!hasLoadedRef.current) return;

    const id = window.requestAnimationFrame(() => {
      try {
        localStorage.setItem(STEPS_KEY, JSON.stringify(steps));
      } catch (e) {
        console.warn("Failed to save steps to localStorage", e);
      }
    });

    return () => window.cancelAnimationFrame(id);
  }, [steps]);

  const recommendedBand = useMemo(() => {
    const trimmed = String(answer).trim();
    const rec = recommendBand(trimmed);
    return clampBand(rec ?? 1);
  }, [answer]);

  const distanceValue = useMemo(() => {
    const table = [1.2, 3.2, 6.0];
    return table[recommendedBand];
  }, [recommendedBand]);

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

  const goToInput = () => {
    setAnswer("");
    setFadeOut(false);
    setPhase("input");
  };

  const clearHistory = () => {
    if (!window.confirm("履歴をすべて消しますか？（この端末のみ）")) return;

    setSteps([]);
    try {
      localStorage.removeItem(STEPS_KEY);
    } catch (e) {
      console.warn("Failed to remove steps from localStorage", e);
    }
    goToInput();
  };

  const onSave = () => {
    const trimmed = String(answer).trim();
    if (!trimmed) return;

    const band = clampBand(recommendedBand);
    const table = [1.2, 3.2, 6.0];
    const val = table[band];
    const it = interpretDistance(val);

    const newStep = {
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
      answer: trimmed,
      distanceBand: band,
      distanceValue: val,
      distanceLabel: it.label,
      distanceMessage: it.message,
    };

    setAfterBand(band);
    setAfterLabel(it.label);
    setAfterMessage(getAfterMessage(band));

    setSteps((prev) => [...prev, newStep]);

    setPhase("after");
    setFadeOut(false);
    setAnswer("");

    setTimeout(() => setFadeOut(true), 3500);
    setTimeout(() => setPhase("history"), 5200);
  };

  return (
    <main style={styles.next}>
      <NorthStar origin={origin} />

      {/* 入力 */}
      {phase === "input" && (
        <div style={styles.card}>
          <h2 style={styles.questionTitle}>今週の問い</h2>
          <p style={styles.question}>
            今週の自分を、原点に照らしてみてください。
          </p>

          <textarea
            style={styles.textarea}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="今の気持ちを、そのまま"
          />

          <button
            style={styles.saveButton}
            disabled={!String(answer).trim()}
            onClick={onSave}
          >
            記録する
          </button>

          {steps.length > 0 && (
            <button
              type="button"
              onClick={() => setPhase("history")}
              style={{ ...styles.saveButton, marginTop: 12, opacity: 0.7 }}
            >
              履歴を見る
            </button>
          )}
        </div>
      )}

      {/* 余韻 */}
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
            {afterLabel || interpretation.label}
          </p>
          <p style={{ opacity: 0.8 }}>
            {afterMessage || getAfterMessage(afterBand)}
          </p>
        </div>
      )}

      {/* 履歴 */}
      {phase === "history" && (
        <div
          style={{ height: "100vh", display: "flex", flexDirection: "column" }}
        >
          {/* 上固定バー */}
          <div style={styles.historyTopBar}>
            <div
              style={{
                width: "100%",
                maxWidth: 480,
                display: "flex",
                gap: 10,
                padding: "0 4px",
                alignItems: "center",
              }}
            >
              <button style={styles.historyButton} onClick={goToInput}>
                問いに戻る
              </button>

              <button
                type="button"
                style={styles.historyButtonDanger}
                onClick={clearHistory}
              >
                履歴を消す
              </button>
            </div>
          </div>

          <div
            id={HISTORY_SCROLL_ID}
            style={{
              flex: 1,
              overflowY: "auto",
              paddingBottom: 120,
            }}
          >
            <StepHistory
              steps={steps}
              onBackToSplash={onBackToSplash}
              scrollContainerId={HISTORY_SCROLL_ID}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default QuestionView;
