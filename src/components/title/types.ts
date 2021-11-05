import { color } from "../input/types";

export interface TitleProps extends color {
  children: string;
  align?: "center" | "left" | "right";
}
