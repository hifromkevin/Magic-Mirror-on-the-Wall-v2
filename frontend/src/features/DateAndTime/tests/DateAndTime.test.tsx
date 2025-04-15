import { screen } from '@testing-library/react';
import { renderWithQueryClient } from '../../../utils/TestUtils';
import DateAndTime from '../DateAndTime';

describe('DateAndTime Component', () => {
  it('renders current date and time', () => {
    jest.useFakeTimers().setSystemTime(new Date('2023-01-02T12:00:00Z'));

    renderWithQueryClient(<DateAndTime />);

    expect(screen.getByText('4:00 AM')).toBeInTheDocument();
    expect(screen.getByText('January 2, 2023')).toBeInTheDocument();
    expect(screen.getByText('Monday')).toBeInTheDocument();

    jest.useRealTimers();
  });
});
