import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					Home Page
				</NavLink>
				<NavLink className="navbar-brand" to="/about">
					About Page
				</NavLink>
				<NavLink className="navbar-brand" to="/login">
					Login
				</NavLink>
				<NavLink className="navbar-brand" to="/error">
					Error
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;

