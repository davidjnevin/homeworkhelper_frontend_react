import { createBrowserRouter } from 'react-router-dom';
import HealthCheck from '../components/HealthCheck'
import LoginBox from '../components/user/LoginBox'
import RegisterForm from '../components/user/RegisterForm';

import { About, Assignments, Error, HomeLayout, Landing, Subjects, Teachers } from '../pages'

const routes = [
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'assignments',
				element: <Assignments />,
			},
			{
				path: 'teachers',
				element: <Teachers />,
			},
			{
				path: 'subjects',
				element: <Subjects />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'login',
				element: <LoginBox />
			},
			{
				path: 'register',
				element: <RegisterForm />
			},
			{
				path: 'healthcheck',
				element: <HealthCheck />
			},
		],
	},
];

export default routes;
