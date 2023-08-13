import { render, screen } from '@testing-library/react';
import Teachers from '../../src/pages/Teachers';

describe('Assignment', () => {

	test('should contain Teachers', async () => {
		render(<Teachers />);
		const message = await screen.queryByText('Teachers');
		expect(message).toBeDefined();
	});
});


