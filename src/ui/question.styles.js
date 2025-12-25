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
    fontSize: "14px",
    letterSpacing: "0.15em",
    opacity: 0.6,
    marginBottom: "16px",
  },
  question: {
    fontSize: "20px",
    lineHeight: 1.8,
  },
  textarea: {
    width: "100%",
    minHeight: "120px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "12px",
    color: "#eaeaea",
    fontSize: "16px",
    lineHeight: 1.6,
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
    top: "24px",
    right: "0",
    width: "260px",
    background: "rgba(10,15,30,0.95)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "12px",
    padding: "16px",
    color: "#eaeaea",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
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
};
