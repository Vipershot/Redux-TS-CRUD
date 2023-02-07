import Button from '@mui/material/Button';
import { ButtonProps } from '@/type/Button';
import "@/style/App.css";

const Confirm = ({ text, onClick, type, color = "primary" }: ButtonProps) => {
  return (
    <Button className='Button' variant="contained" color={color} onClick={onClick} type={type}> {text} </Button>
  )
}

export default Confirm