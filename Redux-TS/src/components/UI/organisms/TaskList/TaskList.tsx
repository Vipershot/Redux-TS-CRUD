import { CreateTask, Header, ListBox } from "@/components/UI/molecules/FormListView/index";
import Box from '@mui/material/Box';

export const TaskList = () => {
  return (
    <Box sx={{position:'relative'}}>
      <Header />
      <ListBox />
      <CreateTask />
    </Box>
  )
}

export default TaskList