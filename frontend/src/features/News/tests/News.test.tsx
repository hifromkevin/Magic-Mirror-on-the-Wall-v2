import { screen } from '@testing-library/react';
import { renderWithQueryClient } from '../../../utils/TestUtils';
import News from '../News';
import Article from '../modules/Article';

import * as useFetchNewsHook from '../../../hooks/useFetchNews';

jest.mock('../../../hooks/useFetchNews');
const mockUseFetchNews = useFetchNewsHook.useFetchNews as jest.Mock;

describe('News Component', () => {
  it('renders loading state', () => {
    mockUseFetchNews.mockReturnValue({
      news: [],
      error: null,
      isError: false,
      isLoading: true,
    });

    renderWithQueryClient(<News />);
    expect(screen.getByText('Loading news')).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockUseFetchNews.mockReturnValue({
      news: [],
      error: {
        message: 'Request failed',
      },
      isError: true,
      isLoading: false,
    });

    renderWithQueryClient(<News />);
    expect(
      screen.getByText('No news is bad news: Request failed')
    ).toBeInTheDocument();
  });

  it('renders articles successfully', () => {
    renderWithQueryClient(<Article title="Test News 1" author="Test Author" />);
    expect(screen.getByText('Test News 1')).toBeInTheDocument();
    expect(screen.getByText(', By Test Author')).toBeInTheDocument();
    renderWithQueryClient(<Article title="Test News 2" author="" />);
    expect(screen.getByText('Test News 2')).toBeInTheDocument();
  });
});
