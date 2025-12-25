import { useState } from "react";
import { questionStyles as styles } from "../ui/question.styles";
import NorthStar from "./NorthStar";

function QuestionView({ origin }) {
  const [answer, setAnswer] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  if (isSaved) {
    return (
      <main style={styles.afterSave}>
        <div style={styles.northStar} />
        <p style={styles.afterText}>今週の一歩、残しました</p>
      </main>
    );
  }

  return (
    <main style={styles.next}>
      <NorthStar origin={origin} />

      <div style={styles.card}>
        <h2 style={styles.questionTitle}>今週の問い</h2>
        <p style={styles.question}>先週の自分と比べて、どうでしたか？</p>

        <textarea
          style={styles.textarea}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <p style={styles.lightText}>
          この問いを、あなたの「原点」に照らしてみてください
        </p>

        <button
          style={styles.saveButton}
          disabled={!answer.trim()}
          onClick={() => setIsSaved(true)}
        >
          記録する
        </button>
      </div>
    </main>
  );
}

export default QuestionView;
