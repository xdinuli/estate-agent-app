jest.mock("react-dnd", () => ({
  useDrag: () => [{ isDragging: false }, jest.fn()],
  useDrop: () => [{ isOver: false }, jest.fn()],
}));

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchPage from '../pages/SearchPage.jsx';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from '../context/FavoritesContext.jsx';

const mockProperties = [
  {
    "id": "1",
    "type": "House",
    "price": 500000,
    "bedrooms": 3,
    "picture": "house1.jpg",
    "description": "A lovely house",
    "location": "London",
    "added": { "month": "January", "day": 12, "year": 2023 }
  },
  {
    "id": "2",
    "type": "Flat",
    "price": 350000,
    "bedrooms": 2,
    "picture": "flat1.jpg",
    "description": "Modern flat",
    "location": "Manchester",
    "added": { "month": "March", "day": 10, "year": 2023 }
  }
];
// --------------------------------

// This tells Jest: "When the app asks for 'properties.json', give it mockProperties instead."
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProperties),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

const renderWithProviders = (ui) => {
  return render(
    <BrowserRouter>
      <FavoritesProvider>
        {ui}
      </FavoritesProvider>
    </BrowserRouter>
  );
};

test("renders property search heading", () => {
    renderWithProviders(<SearchPage />);
    expect(screen.getByRole("heading", { name: /Property Search/i })).toBeInTheDocument();
});

test("renders property cards", async () => {
    renderWithProviders(<SearchPage />);
    const buttons = await screen.findAllByText(/Add to Favorites/i);
    expect(buttons.length).toBeGreaterThan(0);
});