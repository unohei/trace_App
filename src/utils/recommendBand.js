// src/utils/recommendBand.js

function normalize(text = "") {
  return text
    .toLowerCase()
    .replace(/\s+/g, "") // 空白ゆれ
    .replace(/[！!？?。．、】【,]/g, ""); // 記号ゆれ（必要なら増やす）
}

// words: { w: "納得", p: 2 } みたいに重み付けできる
const NEAR = [
  { w: "落ち着", p: 2 },
  { w: "整っ", p: 2 },
  { w: "整う", p: 2 },
  { w: "納得", p: 2 },
  { w: "腹落ち", p: 2 },
  { w: "しっくり", p: 2 },
  { w: "満ち", p: 2 },
  { w: "満足", p: 2 },
  { w: "安心", p: 2 },
  { w: "静か", p: 1 },
  { w: "穏やか", p: 1 },
  { w: "集中", p: 2 },
  { w: "没頭", p: 2 },
  { w: "戻れ", p: 1 },
  { w: "原点", p: 1 },
  { w: "丁寧", p: 1 },
  { w: "素直", p: 1 },
  { w: "噛み締め", p: 1 },
];

const MID = [
  { w: "迷", p: 2 },
  { w: "揺", p: 2 },
  { w: "モヤ", p: 2 },
  { w: "もや", p: 2 },
  { w: "模索", p: 2 },
  { w: "試", p: 1 },
  { w: "探", p: 1 },
  { w: "途中", p: 1 },
  { w: "なんとか", p: 1 },
  { w: "少しずつ", p: 1 },
  { w: "じわじわ", p: 1 },
  { w: "手探り", p: 2 },
  { w: "様子見", p: 1 },
  { w: "様子をみ", p: 1 },
  { w: "調整", p: 1 },
  { w: "整え直", p: 1 },
  { w: "切り替え", p: 1 },
];

const FAR = [
  { w: "挑戦", p: 2 },
  { w: "飛び込", p: 2 },
  { w: "踏み出", p: 2 },
  { w: "変え", p: 2 },
  { w: "変化", p: 2 },
  { w: "刷新", p: 2 },
  { w: "決断", p: 2 },
  { w: "覚悟", p: 2 },
  { w: "新し", p: 2 },
  { w: "未知", p: 2 },
  { w: "不安", p: 1 }, // ここは好みで。遠い＝不安が出やすい週として
  { w: "怖", p: 1 },
  { w: "崩", p: 2 },
  { w: "限界", p: 2 },
  { w: "燃え尽", p: 2 },
  { w: "振り切", p: 2 },
  { w: "やり切", p: 1 },
];

function score(text, dict) {
  let s = 0;
  for (const { w, p } of dict) {
    if (text.includes(w)) s += p;
  }
  return s;
}

export function recommendBand(rawText = "") {
  const t = normalize(rawText);
  if (!t) return null;

  const s0 = score(t, NEAR);
  const s1 = score(t, MID);
  const s2 = score(t, FAR);

  const max = Math.max(s0, s1, s2);

  // 弱すぎるときは提案しない
  if (max < 2) return null;

  // 同点なら中間に寄せる
  if (s0 === s1 && s0 === max) return 1;
  if (s1 === s2 && s1 === max) return 1;

  if (s0 === max) return 0;
  if (s2 === max) return 2;
  return 1;
}

export function bandLabel(band) {
  return band === 0
    ? "原点のすぐそば"
    : band === 1
    ? "少し外側"
    : "遠くまで来た";
}
