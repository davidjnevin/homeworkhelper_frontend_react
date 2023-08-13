import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
// import { BrowserRouter, createBrowserRouter, useNavigate } from 'react-router-dom'; // Needed for NavLink
import '@testing-library/jest-dom/extend-expect'; // For the "toBeInTheDocument" matcher
// import Navbar from '../../src/components/Navbar'; // Path to your Navbar component
// import routes from '../../src/utils/routes';
import App from '../../src/App';

describe('Navbar', () => {
	test('renders links to Home, About, Assignments, Subjects, Teachers and Login pages', () => {
		render(
			<App />
		);

		// Check that the links are rendered with the correct text and href attributes
		expect(screen.getByText('Assignments')).toBeInTheDocument();
		expect(screen.getByText('Assignments').closest('a')).toHaveAttribute('href', '/assignments');
		expect(screen.getByText('Subjects')).toBeInTheDocument();
		expect(screen.getByText('Subjects').closest('a')).toHaveAttribute('href', '/subjects');
		expect(screen.getByText('Teachers')).toBeInTheDocument();
		expect(screen.getByText('Teachers').closest('a')).toHaveAttribute('href', '/teachers');
		expect(screen.getByText('About')).toBeInTheDocument();
		expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
		expect(screen.getByText('Login')).toBeInTheDocument();
		expect(screen.getByText('Login').closest('a')).toHaveAttribute('href', '/login');
		expect(screen.getByText('Healthcheck')).toBeInTheDocument();
		expect(screen.getByText('Healthcheck').closest('a')).toHaveAttribute('href', '/healthcheck');
	});
});


