import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Landing } from '../../src/pages';

test('renders landing page', async () => {
	render(<Landing />);
	const message = await screen.queryByText('Landing');
	expect(message).toBeDefined();
});



