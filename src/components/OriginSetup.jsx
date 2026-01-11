import { useMemo, useState } from "react";
import { questionStyles as styles } from "../ui/question.styles";

function OriginSetup({ initialOrigin, onComplete, onDelete, onBackToSplash }) {
  const [origin, setOrigin] = useState(() => ({
    joy: initialOrigin?.joy ?? "",
    stubborn: initialOrigin?.stubborn ?? "",
    immerse: initialOrigin?.immerse ?? "",
  }));

  const isComplete = useMemo(() => {
    return (
      String(origin.joy).trim() &&
      String(origin.stubborn).trim() &&
      String(origin.immerse).trim()
    );
  }, [origin]);

  const hasSomething = useMemo(() => {
    return (
      String(origin.joy).trim() ||
      String(origin.stubborn).trim() ||
      String(origin.immerse).trim()
    );
  }, [origin]);

  const handleSubmit = () => {
    if (!isComplete) return;

    const payload = {
      joy: String(origin.joy).trim(),
      stubborn: String(origin.stubborn).trim(),
      immerse: String(origin.immerse).trim(),
    };

    onComplete?.(payload);
  };

  const handleDelete = () => {
    if (typeof onDelete !== "function") return;
    if (!window.confirm("原点を削除しますか？（この端末のみ）")) return;
    onDelete();
  };

  return (
    <main style={styles.next}>
      <div style={styles.card}>
        <h2 style={{ fontSize: 16, margin: 0, opacity: 0.92 }}>原点を置く</h2>

        <p
          style={{
            marginTop: 10,
            marginBottom: 14,
            lineHeight: 1.8,
            opacity: 0.8,
          }}
        >
          すぐに答えが出なくても大丈夫。
          <br />
          今のあなたが思う「原点」でいい。
        </p>

        {/* ① ワクワク */}
        <div
          style={{
            marginTop: 10,
            marginBottom: 8,
            fontSize: 13,
            opacity: 0.85,
          }}
        >
          人生で最も「ワクワク」したと感じたこと
        </div>
        <textarea
          style={styles.textarea}
          value={origin.joy}
          onChange={(e) => setOrigin((p) => ({ ...p, joy: e.target.value }))}
          placeholder="あの時の、あの時間が忘れられない"
        />

        {/* ② 怒られてもやりたかった */}
        <div
          style={{
            marginTop: 14,
            marginBottom: 8,
            fontSize: 13,
            opacity: 0.85,
          }}
        >
          怒られてもやりたい（やりたくない）こと
        </div>
        <textarea
          style={styles.textarea}
          value={origin.stubborn}
          onChange={(e) =>
            setOrigin((p) => ({ ...p, stubborn: e.target.value }))
          }
          placeholder="理屈より先に、体が動いたこと"
        />

        {/* ③ 没頭 */}
        <div
          style={{
            marginTop: 14,
            marginBottom: 8,
            fontSize: 13,
            opacity: 0.85,
          }}
        >
          とても長く没頭できること
        </div>
        <textarea
          style={styles.textarea}
          value={origin.immerse}
          onChange={(e) =>
            setOrigin((p) => ({ ...p, immerse: e.target.value }))
          }
          placeholder="気づいたら夜になっていたこと"
        />

        <button
          style={{
            ...styles.saveButton,
            opacity: isComplete ? 1 : 0.4,
            cursor: isComplete ? "pointer" : "not-allowed",
          }}
          disabled={!isComplete}
          onClick={handleSubmit}
        >
          原点を置く
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
            gap: 12,
          }}
        >
          <button
            type="button"
            onClick={onBackToSplash}
            style={{
              border: "none",
              background: "transparent",
              padding: 0,
              color: "rgba(255,255,255,0.65)",
              fontSize: 12,
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: 3,
              opacity: 0.85,
            }}
          >
            スプラッシュに戻る
          </button>

          {typeof onDelete === "function" && (
            <button
              type="button"
              onClick={handleDelete}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                color: "rgba(255,255,255,0.55)",
                fontSize: 12,
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: 3,
                opacity: hasSomething ? 0.8 : 0.35,
                pointerEvents: hasSomething ? "auto" : "none",
              }}
              title={hasSomething ? "" : "入力がないため削除できません"}
            >
              原点を削除する
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export default OriginSetup;
