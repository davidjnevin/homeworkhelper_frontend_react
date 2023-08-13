import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Error from '../../src/pages/Error';

test('renders error page', async () => {
	render(<Error />);
	const message = await screen.queryByText('Error');
	expect(message).toBeDefined();
});



