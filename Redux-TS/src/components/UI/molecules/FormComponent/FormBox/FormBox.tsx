import { RootState } from "@/app/store";
import Input from "@/components/UI/atoms/Input/Input";
import TextArea from "@/components/UI/atoms/Input/TextArea";
import { addTask, editTask } from "@/features/taskSlice/taskSlice";
import { Task } from "@/type/Task";
import { Box } from "@mui/system";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface ButtonProps {
  buttons: React.ReactElement
}

const FormBox = ({ buttons }: ButtonProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector((state: RootState) => state.tasks)
  const [task, setTask] = useState<Task>({
    id: uuidv4(),
    title: '',
    description: '',
  })
  const handledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }
  const handledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (params.id) {
      dispatch(editTask(task))
      navigate('/')
    } else {
      dispatch(addTask(task))
      navigate('/')
    }
  }

  useEffect(() => {
    if (params.id) {
      setTask(Object.assign({}, tasks.find((task: Task) => task.id === params.id)))
    }
  }, [])

  return (
    <form onSubmit={handledSubmit}>
      <Box className='formBox'>
        <Input placeholder="Title" value={task.title} onChange={handledChange} />
        <TextArea placeholder="Enter your task" value={task.description} onChange={handledChange} />
      </Box>
      {buttons}
    </form>
  );
};

export default FormBox;
