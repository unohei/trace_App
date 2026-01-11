import { useEffect, useMemo, useState } from "react";
import Splash from "./components/Splash";
import OriginSetup from "./components/OriginSetup";
import QuestionView from "./components/QuestionView";

const ORIGIN_KEY = "origin";

function App() {
  // "splash" | "origin" | "question"
  const [screen, setScreen] = useState("splash");
  const [origin, setOrigin] = useState(null);

  // QuestionView を開くときの初期フェーズ（"input" | "history"）
  const [qvInitialPhase, setQvInitialPhase] = useState("input");

  // 原点を読む
  useEffect(() => {
    try {
      const raw = localStorage.getItem(ORIGIN_KEY);
      if (raw) setOrigin(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  const hasOrigin = useMemo(() => {
    return Boolean(origin && origin.joy && origin.stubborn && origin.immerse);
  }, [origin]);

  // Splash クリック（通常開始）
  const startFromSplash = () => {
    if (hasOrigin) {
      setQvInitialPhase("input");
      setScreen("question");
    } else {
      setScreen("origin");
    }
  };

  // Splash：北極星 → 原点編集
  const goEditOrigin = () => {
    setScreen("origin");
  };

  // Splash：月 → 履歴
  const goHistory = () => {
    if (!hasOrigin) {
      setScreen("origin");
      return;
    }
    setQvInitialPhase("history");
    setScreen("question");
  };

  // 共通：スプラッシュへ戻る
  const backToSplash = () => {
    setScreen("splash");
  };

  // OriginSetup：保存
  const onCompleteOrigin = (data) => {
    try {
      localStorage.setItem(ORIGIN_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
    setOrigin(data);
    setQvInitialPhase("input");
    setScreen("question");
  };

  // OriginSetup：削除
  const onDeleteOrigin = () => {
    try {
      localStorage.removeItem(ORIGIN_KEY);
    } catch {
      // ignore
    }
    setOrigin(null);
    setScreen("splash");
  };

  // 画面分岐（return はここで一箇所にまとめる）
  if (screen === "splash") {
    return (
      <Splash
        onFinish={startFromSplash}
        onGoHistory={goHistory}
        onGoEditOrigin={goEditOrigin}
      />
    );
  }

  if (screen === "origin") {
    return (
      <OriginSetup
        initialOrigin={origin}
        onComplete={onCompleteOrigin}
        onDelete={onDeleteOrigin}
        onBackToSplash={backToSplash}
      />
    );
  }

  return (
    <QuestionView
      origin={origin}
      initialPhase={qvInitialPhase}
      onBackToSplash={backToSplash}
    />
  );
}

export default App;
