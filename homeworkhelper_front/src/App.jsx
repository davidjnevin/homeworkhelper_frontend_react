import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './utils/routes';

export const NoMatch = () => <div>No match</div>;

export const LocationDisplay = () => {
	const location = useLocation();

	return <div data-testid="location-display">{location.pathname}</div>;
};
const router = createBrowserRouter(routes);
const App = () => <RouterProvider router={router}></RouterProvider>;

export default App;
