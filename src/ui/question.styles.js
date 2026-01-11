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
    fontSize: "13px",
    letterSpacing: "0.12em",
    opacity: 0.55,
    marginBottom: "12px",
  },
  question: {
    fontSize: "21px", //  20 → 21
    lineHeight: 1.7, // 1.8 → 1.7
    fontWeight: 500,
    marginBottom: "20px", // 少し余白に
  },
  textarea: {
    width: "100%",
    minHeight: "120px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "14px", // 12 → 14
    color: "#eaeaea",
    fontSize: "16px",
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
    position: "absolute",
    top: 18,
    left: 18,
    zIndex: 40,
  },

  northStar: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.92)",
    boxShadow: "0 0 12px rgba(255,255,255,0.85)",
    cursor: "pointer",
    animation: "northStarGlow 3s ease-in-out infinite",
  },

  originPopover: {
    position: "absolute",
    top: "44px",
    left: "0",
    width: "320px",
    maxWidth: "78vw",

    background: "rgba(10, 12, 18, 0.88)",
    border: "1px solid rgba(255,220,150,0.18)",
    borderRadius: "14px",
    padding: "14px 14px 12px",
    backdropFilter: "blur(10px)",

    boxShadow: `
      0 14px 32px rgba(0,0,0,0.40),
      0 0 42px rgba(255,220,150,0.10)
    `,
  },

  originTitle: {
    fontSize: "13px",
    letterSpacing: "0.10em",
    opacity: 0.9,
    margin: 0,
    marginBottom: "10px",
  },

  originList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
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
    background: "rgba(255,248,230,0.06)", // 月色調整場所
    border: "1px solid rgba(255,220,150,0.22)",
    color: "rgba(255,255,255,0.9)",
    borderRadius: "24px",
    cursor: "pointer",
  },
  // 追加：上バーの中身（横並び）
  historyTopRow: {
    width: "100%",
    maxWidth: 480,
    display: "flex",
    gap: 10,
    padding: "0 4px",
    alignItems: "center",
  },

  // 微調整：履歴を消す
  historyButtonDanger: {
    padding: "10px 12px",
    borderRadius: "24px",
    border: "1px solid rgba(255,220,150,0.18)",
    background: "rgba(255,248,230,0.04)",
    color: "rgba(255,255,255,0.75)",
    fontSize: 12,
    cursor: "pointer",
    whiteSpace: "nowrap",
    width: "120px",
  },
};
