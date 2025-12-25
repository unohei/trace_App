import { useState, useEffect } from "react";
import Splash from "./components/Splash";
import OriginSetup from "./components/OriginSetup";
import QuestionView from "./components/QuestionView";

function App() {
  const [isSplash, setIsSplash] = useState(true);
  const [origin, setOrigin] = useState(null);

  // 初回だけ localStorage から原点を読む
  useEffect(() => {
    const saved = localStorage.getItem("origin");
    if (saved) {
      setOrigin(JSON.parse(saved));
    }
  }, []);

  // ① Splash
  if (isSplash) {
    return <Splash onFinish={() => setIsSplash(false)} />;
  }

  // ② 原点がなければ必ずここ
  if (!origin) {
    return (
      <OriginSetup
        onComplete={(data) => {
          localStorage.setItem("origin", JSON.stringify(data));
          setOrigin(data);
        }}
      />
    );
  }

  // ③ 通常画面
  return <QuestionView />;
}

export default App;
