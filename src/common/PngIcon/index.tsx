import { PngIconProps } from "../types";

export const PngIcon = ({ src, width, height, style }: PngIconProps) => (
  <img src={`/img/png/${src}`} alt={src} width={width} height={height} style={style} />
);
