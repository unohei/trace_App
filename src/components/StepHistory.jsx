import { getDistance, interpretDistance } from "../utils/originDistance";

function StepHistory({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  // 比較用：古い→新しい
  const chrono = [...steps].sort((a, b) => a.id - b.id);

  // 「距離カテゴリが前回と変わった」判定（id → boolean）
  const changedMap = new Map();
  for (let i = 0; i < chrono.length; i++) {
    const cur = chrono[i];
    const prev = chrono[i - 1];

    if (!prev) {
      changedMap.set(cur.id, false);
      continue;
    }

    const curKey = cur.distanceBand ?? cur.distanceLabel ?? "";
    const prevKey = prev.distanceBand ?? prev.distanceLabel ?? "";
    changedMap.set(cur.id, curKey !== prevKey);
  }

  // 表示は新しい順
  const display = [...chrono].sort((a, b) => b.id - a.id);

  return (
    <section
      style={{
        marginTop: 32,
        maxWidth: 480,
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 4px",
      }}
    >
      <h3 style={{ fontSize: 14, marginBottom: 16, opacity: 0.8 }}>
        これまでの一歩
      </h3>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {display.map((step) => {
          // label/message が無い場合だけフォールバック（保険）
          let label = step.distanceLabel;
          let message = step.distanceMessage;

          if (!label || !message) {
            // 旧構造互換：point があるなら距離算出、なければ中間扱い
            const d = step.point
              ? getDistance(step.point)
              : step.distanceValue ?? 3.2;
            const it = interpretDistance(d);
            label = label ?? it.label;
            message = message ?? it.message;
          }

          const isLit = Boolean(changedMap.get(step.id));

          // ★ 回答（保険で複数候補を見る）
          const answerRaw =
            step.answer ?? step.response ?? step.text ?? step.comment ?? "";
          const answer = String(answerRaw).trim();

          return (
            <li
              key={step.id}
              style={{
                position: "relative",
                marginBottom: 18,
                padding: "16px 16px",
                borderRadius: 18,

                // ★ 月色ベース（グラデーションなし）
                background: "rgba(255,248,230,0.06)",
                border: "1px solid rgba(255,220,150,0.18)",

                // ★ 月明かりのにじみ（変化した週だけ少し強い）
                boxShadow: isLit
                  ? `
                    0 10px 28px rgba(0,0,0,0.20),
                    0 0 34px rgba(255,220,150,0.22),
                    0 0 84px rgba(255,200,120,0.16)
                  `
                  : "0 10px 28px rgba(0,0,0,0.25)",

                overflow: "hidden",
                transition: "box-shadow 0.6s ease",
              }}
            >
              {/* 月明かり（全体をやさしく照らす） */}
              {isLit && (
                <>
                  {/* うっすら面で照らす */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 18,
                      background: "rgba(255,248,230,0.08)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* ほんのり上から当たってる感じ（左右均等） */}
                  <div
                    style={{
                      position: "absolute",
                      top: -60,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 520,
                      height: 200,
                      borderRadius: "50%",
                      background: "rgba(255,220,150,0.10)",
                      filter: "blur(18px)",
                      pointerEvents: "none",
                    }}
                  />
                </>
              )}

              <div style={{ fontSize: 11, opacity: 0.55 }}>
                {step.createdAt}
              </div>

              <div style={{ fontSize: 13, marginTop: 6, opacity: 0.92 }}>
                {label}
              </div>

              <div style={{ fontSize: 12, opacity: 0.72, marginTop: 4 }}>
                {message}
              </div>

              {/* ★ 問いの回答（ここが追加点） */}
              {answer && (
                <div
                  style={{
                    marginTop: 12,
                    padding: "10px 12px",
                    borderRadius: 14,
                    background: "rgba(0,0,0,0.18)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    fontSize: 13,
                    lineHeight: 1.7,
                    opacity: 0.92,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {answer}
                </div>
              )}

              {isLit && (
                <div style={{ marginTop: 10, fontSize: 11, opacity: 0.6 }}>
                  月明かりに照らされた変化
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default StepHistory;
