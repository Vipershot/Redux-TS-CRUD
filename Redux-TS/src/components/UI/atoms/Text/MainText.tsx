import React from 'react'
import Typography from '@mui/material/Typography';
import { Text } from '@/type/Text';
import "@/style/App.css";

const MainText = ({ text }: Text) => {
  return (
    <Typography className='MainText' variant='h1'>
      {text}
    </Typography>
  )
}

export default MainText