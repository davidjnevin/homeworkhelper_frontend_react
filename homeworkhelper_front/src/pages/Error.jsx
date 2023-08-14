import Wrapper from '../assets/wrappers/errorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';


const Error = () => {
	const error = useRouteError();
	console.log(error);
	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={img} alt="not found" />
					<h3>Oops !</h3>
					<p>Sorry, we can't find the page you're looking for.</p>
					<Link to="/" >Back to home</Link>
					<p className="small">not found by zakiaalfitry from <a href="https://thenounproject.com/browse/icons/term/not-found/" target="_blank" title="not found Icons">Noun Project</a> (CC BY 3.0)</p>

				</div>
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<div><h3>Something went wrong</h3></div>
		</Wrapper>
	)
};

export default Error;
