import { useEffect, useMemo, useState } from "react";
import { getDistance, interpretDistance } from "../utils/originDistance";

function StepHistory({ steps = [], onBackToSplash, scrollContainerId }) {
  if (!steps || steps.length === 0) return null;

  // 変化判定（古い→新しい）
  const chrono = useMemo(() => [...steps].sort((a, b) => a.id - b.id), [steps]);

  const changedMap = useMemo(() => {
    const m = new Map();
    for (let i = 0; i < chrono.length; i++) {
      const cur = chrono[i];
      const prev = chrono[i - 1];
      if (!prev) {
        m.set(cur.id, false);
        continue;
      }
      const curKey = cur.distanceBand ?? cur.distanceLabel ?? "";
      const prevKey = prev.distanceBand ?? prev.distanceLabel ?? "";
      m.set(cur.id, curKey !== prevKey);
    }
    return m;
  }, [chrono]);

  // 表示は新しい順
  const display = useMemo(
    () => [...chrono].sort((a, b) => b.id - a.id),
    [chrono]
  );

  // スクロールしたら「トップに戻る」を出す
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (!scrollContainerId) return;
    const el = document.getElementById(scrollContainerId);
    if (!el) return;

    const onScroll = () => {
      setShowBackToTop(el.scrollTop > 120);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollContainerId]);

  const scrollToTop = () => {
    const el = document.getElementById(scrollContainerId);
    if (!el) return;
    el.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRightLinkClick = () => {
    if (showBackToTop) {
      scrollToTop(); // ★ ここで実行する（returnしない）
      return;
    }
    if (typeof onBackToSplash === "function") onBackToSplash();
  };

  return (
    <section
      style={{
        marginTop: 16,
        maxWidth: 480,
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 4px",
        paddingBottom: 80, // ★ 下の余白（最後が被らない保険）
      }}
    >
      {/* タイトル行（右側リンクは1つだけ） */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <h3 style={{ fontSize: 14, opacity: 0.8, margin: 0 }}>
          これまでの一歩
        </h3>

        {typeof onBackToSplash === "function" && (
          <button
            type="button"
            onClick={handleRightLinkClick}
            style={{
              border: "none",
              background: "transparent",
              padding: 0,
              fontSize: 12,
              opacity: 0.7,
              textDecoration: "underline",
              textUnderlineOffset: 3,
              cursor: "pointer",
              whiteSpace: "nowrap",
              color: "rgba(255,248,230,0.85)",
            }}
          >
            {showBackToTop ? "トップに戻る" : "スプラッシュに戻る"}
          </button>
        )}
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {display.map((step) => {
          let label = step.distanceLabel;
          let message = step.distanceMessage;

          if (!label || !message) {
            const d = step.point
              ? getDistance(step.point)
              : step.distanceValue ?? 3.2;
            const it = interpretDistance(d);
            label = label ?? it.label;
            message = message ?? it.message;
          }

          const answerRaw =
            step.answer ?? step.response ?? step.text ?? step.comment ?? "";
          const answer = String(answerRaw).trim();

          const isLit = Boolean(changedMap.get(step.id));

          return (
            <li
              key={step.id}
              style={{
                position: "relative",
                marginBottom: 18,
                padding: "16px 16px",
                borderRadius: 18,
                background: "rgba(255,248,230,0.06)",
                border: "1px solid rgba(255,220,150,0.18)",
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
              {isLit && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 18,
                      background: "rgba(255,248,230,0.08)",
                      pointerEvents: "none",
                    }}
                  />
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
