import { FormBox, FormButtons, Header } from "@/components/UI/molecules/FormComponent/index";

export const TaskForm = () => {

  return (
    <>
      <Header />
      <FormBox buttons={<FormButtons />} />
    </>
  )
}

export default TaskForm