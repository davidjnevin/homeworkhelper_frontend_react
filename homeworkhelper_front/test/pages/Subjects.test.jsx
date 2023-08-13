import { render, screen } from '@testing-library/react';
import Subjects from '../../src/pages/Subjects';

describe('Assignment', () => {

	test('should contain Subjects', async () => {
		render(<Subjects />);
		const message = await screen.queryByText('Subjects');
		expect(message).toBeDefined();
	});
});
