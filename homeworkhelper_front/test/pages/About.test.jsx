import { render, screen } from '@testing-library/react';
import About from '../../src/pages/About';

describe('About', () => {

	test('should contain About', async () => {
		render(<About />);
		const message = await screen.queryByText('About');
		expect(message).toBeDefined();
	});
});


