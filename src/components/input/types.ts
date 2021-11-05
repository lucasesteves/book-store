export interface InputProps extends color {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: "password" | "text";
  placeholder?: string;
}

export interface color {
  color?: "primary" | "info" | "error";
}
