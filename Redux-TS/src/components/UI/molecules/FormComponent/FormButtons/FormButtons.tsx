import React from 'react';
import Box from '@mui/material/Box';
import Button from "@/components/UI/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import "@/style/App.css";


const FormButtons = () => {
	const navigate = useNavigate()
	return (
		<Box className='buttonForm'>
			<Button text='Save' type='submit' />
			<Button text='Back' color="error" onClick={() => navigate('/')} />
		</Box>
	);
};

export default FormButtons;
