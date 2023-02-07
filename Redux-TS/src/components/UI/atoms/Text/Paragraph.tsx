import React from 'react'
import Typography from '@mui/material/Typography';
import { Text } from '@/type/Text';
import "@/style/App.css";

const Subtitle = ({ text }: Text) => {
  return (
    <Typography className='Paragraph' variant='h4'>
      {text}
    </Typography>
  )
}

export default Subtitle