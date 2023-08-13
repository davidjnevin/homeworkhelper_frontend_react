import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/";

const HomeLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<div>footer</div>
		</div>
	);
};

export default HomeLayout;
