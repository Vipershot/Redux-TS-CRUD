import { RootState } from "@/app/store";
import Button from "@/components/UI/atoms/Button/Button";
import { Paragraph, TitleText } from "@/components/UI/atoms/Text/index";
import { deleteTask } from "@/features/taskSlice/taskSlice";
import { Task } from "@/type/Task";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "@/style/App.css";

const ListBox = () => {
  const dispatch = useDispatch()
  const Task = useSelector((state: RootState) => state.tasks)
  const navigate = useNavigate()
  const removeTask = (id: string) => {
    dispatch(deleteTask(id))
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} columnSpacing={2}>
        {Task.map((task: Task) => (
          <Grid className="taskBox" item md={3} sm={6} xs={6} key={task.id}>
            <Box className='taskItem'>
              <TitleText text={`${task.title}`} />
              <Paragraph text={`${task.description}`} />
              <Box className='buttonsBox'>
                <Button
                  text="Delete"
                  color="error"
                  onClick={() => removeTask(task.id)}
                />
                <Button
                  text="Edit"
                  onClick={() => navigate(`edit-task/${task.id}`)}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListBox;
