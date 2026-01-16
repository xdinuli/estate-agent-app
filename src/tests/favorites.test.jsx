jest.mock("react-dnd", () => ({
  useDrag: () => [{ isDragging: false }, jest.fn()],
  useDrop: () => [{ isOver: false }, jest.fn()],
}));

import '@testing-library/jest-dom';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import SearchPage from '../pages/SearchPage.jsx';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from '../context/FavoritesContext.jsx';

const mockProperties = [
  {
    "id": "1",
    "type": "House",
    "price": 250000,
    "bedrooms": 3,
    "picture": "house1.jpg",
    "description": "A lovely house",
    "location": "London",
    "added": { "month": "January", "day": 12, "year": 2023 }
  }
];

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

const setup = () => {
    render(
        <BrowserRouter>
            <FavoritesProvider>
                <SearchPage />
            </FavoritesProvider>
        </BrowserRouter>
    );
};

test("adds property to favorites when the button is clicked", async () => {
    setup();
    const addButtons = await screen.findAllByText(/Add to Favorites/i);
    fireEvent.click(addButtons[0]);

    // Check that Favorites heading appears (property was added to sidebar)
    await waitFor(() => {
        expect(screen.getByRole("heading", { name: /Favorites/i })).toBeInTheDocument();
    });
});

test("prevents adding the same property multiple times", async () => {
    setup();
    const addButtons = await screen.findAllByText(/Add to Favorites/i);

    // Click twice on the same button
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[0]);

    // Check that only one property appears in favorites panel (check for × remove buttons)
    await waitFor(() => {
        const removeButtons = screen.getAllByLabelText(/Remove property/i);
        expect(removeButtons.length).toBe(1);
    });
});

test("removes property from favorites", async () => {
    setup();
    const addButtons = await screen.findAllByText(/Add to Favorites/i);
    fireEvent.click(addButtons[0]);

    // Wait for property to appear in favorites panel
    const removeButton = await screen.findByLabelText(/Remove property/i);
    fireEvent.click(removeButton);

    // Check that the property is removed from favorites panel
    await waitFor(() => {
        const removedBtn = screen.queryByLabelText(/Remove property/i);
        expect(removedBtn).not.toBeInTheDocument();
    });
});