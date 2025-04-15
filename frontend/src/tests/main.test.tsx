import { createRoot } from 'react-dom/client';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe('main.tsx', () => {
  test('renders App into the root element', () => {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    require('../main.tsx');

    expect(createRoot).toHaveBeenCalledWith(rootElement);

    document.body.removeChild(rootElement);
  });
});
