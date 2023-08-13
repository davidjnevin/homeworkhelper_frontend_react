import { NavLink } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/Navbar';

const Navbar = () => {
	return (
		<Wrapper>
			<div className='nav-center'>
				<span className='logo'>Homework helper</span>
				<div className='nav-links'>
					<NavLink className="nav-link" to="/">
						Home Page
					</NavLink>
					<NavLink className="nav-link" to="/assignments">
						Assignments
					</NavLink>
					<NavLink className="nav-link" to="/subjects">
						Subjects
					</NavLink>
					<NavLink className="nav-link" to="/teachers">
						Teachers
					</NavLink>
					<NavLink className="nav-link" to="/about">
						About
					</NavLink>
					<NavLink className="nav-link" to="/login">
						Login
					</NavLink>
					<NavLink className="nav-link" to="/healthcheck">
						Healthcheck
					</NavLink>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;

