import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "outline" | "default";
  color?: "primary" | "info" | "error";
  disabled?: boolean;
}
