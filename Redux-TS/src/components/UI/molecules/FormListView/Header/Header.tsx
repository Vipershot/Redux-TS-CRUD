import { RootState } from "@/app/store";
import { MainText } from "@/components/UI/atoms/Text/index";
import { useSelector } from "react-redux";
import "@/style/App.css";


const Header = () => {
	const Task = useSelector((state: RootState) => state.tasks)

	return (
		<header className="header">
		{Task.length === 0 ? <MainText text='Welcome, Create your task' /> :	<MainText text={`You Have ${Task.length} Tasks`} />}
		</header>
	);
};

export default Header;
