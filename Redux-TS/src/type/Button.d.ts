export interface ButtonProps {
  text: string,
  variant?: "text" | "outlined" | "contained"
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  color?: "default" | "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined | DefaultComponentProps;
  type?: "button" | "submit" | "reset" | undefined, 
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}