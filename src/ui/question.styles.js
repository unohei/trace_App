export const questionStyles = {
  next: {
    minHeight: "100vh",
    background: "#0b0e14",
    color: "#eaeaea",
    padding: "48px 24px",
  },
  card: {
    maxWidth: "480px",
    margin: "0 auto",
  },
  questionTitle: {
    fontSize: "13px", // ← 少し小さく
    letterSpacing: "0.12em", // ← きつさを緩める
    opacity: 0.55,
    marginBottom: "12px",
  },
  question: {
    fontSize: "21px", // ← 20 → 21 に
    lineHeight: 1.7, // ← 1.8 → 1.7 に
    fontWeight: 500, // ← 追加
    marginBottom: "20px", // ← 少し余白
  },
  textarea: {
    width: "100%",
    minHeight: "120px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "14px", // ← 12 → 14
    color: "#eaeaea",
    fontSize: "16px", // ← これは維持（重要）
    lineHeight: 1.7,
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
  northStarWrapper: {
    position: "fixed",
    top: "16px",
    right: "16px",
    zIndex: 10,
  },

  northStar: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.9)",
    boxShadow: "0 0 12px rgba(255,255,255,0.8)",
    cursor: "pointer",
    animation: "northStarGlow 3s ease-in-out infinite",
  },

  originPopover: {
    position: "absolute",
    top: "48px",
    right: "0",
    width: "280px",
    background: "rgba(20, 24, 40, 0.85)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "16px",
    backdropFilter: "blur(8px)",
  },

  originTitle: {
    fontSize: "12px",
    letterSpacing: "0.15em",
    opacity: 0.8,
    marginBottom: "12px",
  },

  originList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "13px",
    lineHeight: 1.6,
  },
  distanceBox: {
    marginTop: "24px",
    padding: "12px 16px",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.03)",
    maxWidth: "480px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  distanceLabel: {
    fontSize: "13px",
    opacity: 0.7,
    marginBottom: "6px",
  },

  distanceMessage: {
    fontSize: "14px",
    lineHeight: 1.6,
  },

  historyTopBar: {
    maxWidth: "480px",
    margin: "0 auto 16px",
    position: "sticky",
    top: 12,
    zIndex: 20,
    display: "flex",
    justifyContent: "center",
    padding: "6px 0",
    backdropFilter: "blur(8px)",
  },

  historyButton: {
    width: "100%",
    padding: "12px",
    background: "rgba(255,248,230,0.06)", // 月色寄り
    border: "1px solid rgba(255,220,150,0.22)",
    color: "rgba(255,255,255,0.9)",
    borderRadius: "24px",
    cursor: "pointer",
  },
};
