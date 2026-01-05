# Estate Agent Client-Side Web Application

This project is a responsive single-page estate agent web application inspired by Rightmove.co.uk. It was developed as coursework for the module **Advanced Client-Side Web Development** and demonstrates modern client-side development practices using React.

The application allows users to search for properties using multiple criteria, view detailed property information, and manage favourites using drag-and-drop functionality. The entire system is implemented as a client-side application with no server-side code.

---

## Features

- Property search using multiple criteria (type, price range, bedrooms, date added, postcode)
- React widget-based search form
- Dynamic property results display
- Individual property detail pages
- Image gallery and tab-based layout for property information
- Favourites system with drag-and-drop support
- Responsive design for desktop, tablet, and mobile devices
- Client-side routing using React Router
- Client-side security using Content Security Policy (CSP)
- Unit testing implemented using Jest

---

## Technologies Used

- **React** (JavaScript ES6 + JSX)
- **React Router**
- **React Select**
- **React DatePicker**
- **React Range**
- **React Tabs**
- **React DnD**
- **Jest**
- **React Testing Library**
- **Vercel** (Deployment)

---

## Design & Architecture

The application follows a component-based architecture using React functional components and hooks. Core business logic, such as property filtering and favourites management, is separated into reusable utility modules to improve maintainability, readability, and testability.

React Router is used to manage client-side navigation, enabling seamless transitions between views without full page reloads. State is managed locally using React hooks, and components are composed carefully to avoid unnecessary prop drilling.

---

## Testing Strategy

Unit testing was implemented using **Jest** to verify core application logic, including property filtering and favourites management. These tests ensure that key functionality behaves correctly under different conditions.

External UI libraries such as **React DnD** were mocked during testing to isolate application logic and avoid reliance on browser-specific drag-and-drop contexts. This approach follows industry best practices by focusing unit tests on deterministic logic, while interactive UI behaviour was manually verified during development.

---

## Accessibility Considerations

Semantic HTML elements were used where appropriate, and all interactive components are keyboard-accessible. Images include descriptive alternative text, and colour contrast was chosen to ensure readability across devices and screen sizes.

---

## Performance Optimisation

The application optimises performance by minimising unnecessary re-renders and keeping component state localised. Property data is loaded once on the client and filtered in-memory, avoiding redundant processing and network requests.

---

## Security Considerations

A Content Security Policy (CSP) was implemented to reduce the risk of cross-site scripting (XSS) attacks. As the application is fully client-side with no backend or persistent storage, no user data is transmitted or stored externally.

---

## Limitations & Future Improvements

Future enhancements could include:
- Integration with a backend API for real-time property data
- User authentication to persist favourites across sessions
- Automated end-to-end testing using tools such as Cypress
- Enhanced accessibility auditing and ARIA support

---

## Screenshots

*(Screenshots of the search page, property detail page, and favourites panel can be added here.)*

---

## Live Application

Deployed Application:  
https://estate-finder-app.vercel.app

---

## GitHub Repository

Source Code:  
https://github.com/xdinuli/estate-agent-app

---

## How to Run Locally

Clone the repository and run the following commands:

```bash
npm install
npm run dev
