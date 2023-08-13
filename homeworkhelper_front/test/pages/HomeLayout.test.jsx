import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';

test('renders landing page', async () => {
	render(<App />);
	const message = await screen.queryByText(/Landing/i);
	expect(message).toBeVisible();
});



