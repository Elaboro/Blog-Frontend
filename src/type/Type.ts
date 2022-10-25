import React from "react";

export interface IReactNode {
  children?: React.ReactNode;
}

export interface ContentInputProps extends IReactNode {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password";
  placeholder: string;
}

export interface ButtonProps extends IReactNode {
  onClick: ((e: React.MouseEvent<HTMLButtonElement>) => Promise<void> ) | (() => void) | ((v: any) => void);
}
