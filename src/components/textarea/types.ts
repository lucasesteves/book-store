import { color } from "../input/types";

export interface TextareaProps extends color {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
