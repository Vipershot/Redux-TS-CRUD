import React from 'react'
import Typography from '@mui/material/Typography';
import { Text } from '@/type/Text';
import "@/style/App.css";

const TitleText = ({ text }: Text) => {
  return (
    <Typography className='Title' variant='h2'>
      {text}
    </Typography>
  )
}

export default TitleText