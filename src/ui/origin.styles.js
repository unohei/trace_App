export const originStyles = {
  next: {
    minHeight: "100vh",
    padding: "24px 12px 40px",
    background: "radial-gradient(circle at top, #1b2735, #090a0f)",
    color: "rgba(255,255,255,0.92)",
  },

  card: {
    maxWidth: 480,
    margin: "24px auto 0",
    padding: "18px 16px",
    borderRadius: 20,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
  },

  questionTitle: {
    fontSize: 14,
    opacity: 0.7,
    margin: 0,
  },

  question: {
    marginTop: 10,
    marginBottom: 12,
    lineHeight: 1.8,
    opacity: 0.9,
  },

  textarea: {
    width: "100%",
    minHeight: 120,
    resize: "vertical",
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.18)",
    color: "rgba(255,255,255,0.92)",
    padding: "12px 12px",
    outline: "none",
    lineHeight: 1.7,
    boxSizing: "border-box",
  },

  saveButton: {
    width: "100%",
    marginTop: 14,
    padding: "12px",
    borderRadius: 24,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    cursor: "pointer",
  },

  afterSave: {
    maxWidth: 480,
    margin: "0 auto",
    padding: "0 12px",
  },

  historyTopBar: {
    maxWidth: 480,
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
    background: "rgba(255,248,230,0.06)",
    border: "1px solid rgba(255,220,150,0.22)",
    color: "rgba(255,255,255,0.9)",
    borderRadius: "24px",
    cursor: "pointer",
  },

  historyButtonDanger: {
    padding: "10px 12px",
    background: "rgba(0,0,0,0.15)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "rgba(255,255,255,0.75)",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: 12,
    whiteSpace: "nowrap",
  },
};
