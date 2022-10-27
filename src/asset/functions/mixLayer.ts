import chroma from 'chroma-js';

export function mixLayer(back: string, layer: string, alpha: number) {
  const [br, bg, bb] = chroma(back).rgb();
  const [lr, lg, lb] = chroma(layer).rgb();

  return chroma
    .rgb(
      br * (1 - alpha) + lr * alpha,
      bg * (1 - alpha) + lg * alpha,
      bb * (1 - alpha) + lb * alpha
    )
    .hex();
}
