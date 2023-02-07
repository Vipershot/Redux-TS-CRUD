import React, { useState } from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { InputProps } from "@/type/input";



const Input = ({ onChange, value, placeholder }: InputProps) => {
  return (
    <TextareaAutosize className='TextAreaInput' value={value} name='description' placeholder={placeholder} minRows={8} onChange={onChange} />
  )
}

export default Input