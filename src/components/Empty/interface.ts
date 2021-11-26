import { CSSProperties, ReactNode } from "react";

export interface EmptyProps {
  className?: string;
  style?: CSSProperties;
  description?: ReactNode;
  image?: ReactNode;
  imageStyle?: CSSProperties;
}
