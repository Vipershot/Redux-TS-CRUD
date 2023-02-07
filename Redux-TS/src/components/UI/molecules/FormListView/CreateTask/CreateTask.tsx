import Button from "@/components/UI/atoms/Button/Button";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
	const navigate = useNavigate()

	return (
		<Box className='createButton'>
			<Button text='Create New Task' onClick={() => navigate('create-task')} />
		</Box>
	);
};

export default CreateTask;
