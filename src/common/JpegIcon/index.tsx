import { JpegIconProps } from "../types";

export const JpegIcon = ({ src, width, height, borderRadius }: JpegIconProps) => (
  <img src={`/img/jpeg/${src}`} alt={src} width={width} height={height} style={{ borderRadius }}/>
);
