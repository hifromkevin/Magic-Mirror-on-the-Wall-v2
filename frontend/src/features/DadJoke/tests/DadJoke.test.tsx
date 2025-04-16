import { screen } from '@testing-library/react';
import { renderWithQueryClient } from '../../../utils/TestUtils';
import DadJoke from '../DadJoke';
import * as useFetchDadJokeHook from '../../../hooks/useFetchDadJoke';

jest.mock('../../../hooks/useFetchDadJoke');

const mockUseFetchDadJoke = useFetchDadJokeHook.useFetchDadJoke as jest.Mock;

describe('DadJoke Component', () => {
  it('renders loading state', () => {
    mockUseFetchDadJoke.mockReturnValue({
      joke: '',
      error: null,
      isError: false,
      isLoading: true,
    });

    renderWithQueryClient(<DadJoke />);
    expect(screen.getByText("Hi, Loading! I'm Dad!")).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockUseFetchDadJoke.mockReturnValue({
      joke: '',
      error: { message: 'Failed to fetch dad joke', status: 404 },
      isError: true,
      isLoading: false,
    });

    renderWithQueryClient(<DadJoke />);
    expect(
      screen.getByText('Error: Failed to fetch dad joke')
    ).toBeInTheDocument();
  });

  it('renders dad joke successfully', () => {
    mockUseFetchDadJoke.mockReturnValue({
      joke: "Why don't skeletons fight each other? They don't have the guts.",
      error: null,
      isError: false,
      isLoading: false,
    });

    renderWithQueryClient(<DadJoke />);
    expect(
      screen.getByText(
        "Why don't skeletons fight each other? They don't have the guts."
      )
    ).toBeInTheDocument();
  });
});
