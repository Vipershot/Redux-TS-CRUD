export interface InputProps {
  inputText?: React.InputHTMLAttributess,
  onChange: React.EventHandler,
  value?: string,
  rows?: number;
  rowsMax?: number;
  style?: React.CSSProperties;
  className?: string;
  placeholder?: string,
}