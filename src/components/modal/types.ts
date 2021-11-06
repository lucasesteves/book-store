import React from "react";

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  size?: "default" | "large";
  children: React.ReactNode;
}
