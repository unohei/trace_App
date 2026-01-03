export function getDistance(point) {
  return Math.sqrt(point.x ** 2 + point.y ** 2);
}

export function interpretDistance(distance) {
  if (distance < 1) {
    return {
      label: "原点のすぐそば",
      message: "今は、立ち止まって確かめている時間かもしれません",
    };
  }

  if (distance < 3) {
    return {
      label: "近い場所",
      message: "原点を感じながら、少しずつ動いています",
    };
  }

  if (distance < 6) {
    return {
      label: "ほどよい距離",
      message: "自分の原点を活かして進めています",
    };
  }

  return {
    label: "遠くまで来た",
    message: "原点を力に、大きく踏み出しています",
  };
}
