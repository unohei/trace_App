import { useState } from "react";
import { questionStyles as styles } from "../ui/question.styles";

function NorthStar({ origin }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.northStarWrapper}>
      <div style={styles.northStar} onClick={() => setOpen(!open)} />
      {open && (
        <div style={styles.originPopover}>
          <p>✦ 原点</p>
          <ul>
            <li>{origin?.joy}</li>
            <li>{origin?.stubborn}</li>
            <li>{origin?.immerse}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NorthStar;
