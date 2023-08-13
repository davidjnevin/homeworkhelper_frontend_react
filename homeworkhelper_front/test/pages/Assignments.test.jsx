import { render, screen } from '@testing-library/react';
import Assignments from '../../src/pages/Assignments';

describe('Assignment', () => {

	test('should contain Assignments', async () => {
		render(<Assignments />);
		const message = await screen.queryByText('Assignments');
		expect(message).toBeDefined();
	});
});



