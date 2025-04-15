import { screen } from '@testing-library/react';
import { renderWithQueryClient } from '../utils/TestUtils';
import { fullDate } from '../utils/DateAndTimeUtils';
import App from '../App';

describe('App Component', () => {
  test('renders the App component with all child components', () => {
    renderWithQueryClient(<App />);

    const currentDate = new Date();

    expect(screen.getByText(/Loading weather/i)).toBeInTheDocument();
    expect(screen.getByText(/Hi, Loading! I'm Dad!/i)).toBeInTheDocument();
    expect(screen.getByText(/Loading news/i)).toBeInTheDocument();
    expect(screen.getByText(fullDate(currentDate))).toBeInTheDocument();
  });

  test('renders the correct structure of the App component', () => {
    const { container } = renderWithQueryClient(<App />);

    expect(container.querySelector('.appContainer')).toBeInTheDocument();
    expect(container.querySelector('.upperSection')).toBeInTheDocument();
    expect(container.querySelector('.middleSection')).toBeInTheDocument();
    expect(container.querySelector('.bottomSection')).toBeInTheDocument();
  });
});
