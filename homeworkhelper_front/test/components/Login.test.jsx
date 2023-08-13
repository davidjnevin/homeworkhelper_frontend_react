import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginBox from '../../src/components/user/LoginBox';

test('renders login page', async () => {
	render(<LoginBox />);
	const email = await screen.queryByText(/email/i);
	expect(email).toBeDefined();
	const name = await screen.queryByText(/name/i);
	expect(name).toBeDefined();
	const welcome = await screen.queryByText(/Welcome/i);
	expect(welcome).toBeDefined();
});






