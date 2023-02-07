import React from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { InputProps } from "@/type/input";
import "@/style/App.css"

const Input = ({ onChange, value, placeholder }: InputProps) => {
  return (
    <TextareaAutosize className='SimpleInput' value={value} name='title' placeholder={placeholder} onChange={onChange} />
  )
}

export default Input