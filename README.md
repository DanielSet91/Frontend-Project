# FoxInsights

## Description
This project is a web application built with Next.js, Chakra UI, and Redux. It provides functionalities for user authentication using Google, with pages for the dashboard and team management. The project also includes components such as Navbar and Login.

## Project Setup
### Dependencies
- **Node.js:** Ensure you have Node.js installed on your machine.
- **Next.js:** Install Next.js globally or as a project dependency.
- **Chakra UI:** Install Chakra UI for styling and UI components.
- **Redux:** Install Redux for state management.

To install project dependencies, run:
```bash
npm install
```

### Environment Variables
Create a `.env.local` file in the root directory of your project and add the following environment variables:
```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```
Replace `your_google_client_id` with your actual Google client ID obtained from the Google Developer Console.

## Code Structure Explanation
The project follows a modular and organized code structure:
- **pages/:** Contains Next.js page components for different routes.
  - `index.js`: Home page component.
  - `dashboard.js`: Dashboard page component.
  - `team.js`: Team management page component.
- **components/:** Contains reusable UI components used across the application.
  - `Navbar.js`: Navbar component for navigation.
  - `Login.js`: Login component for authentication.
- **redux/:** Contains Redux store configuration and related files.
  - **actions/:** Action creators for Redux actions.
  - **reducers/:** Reducers to manage different parts of the application state.
  - `store.js`: Redux store configuration.
- **styles/:** Contains global styles or CSS modules used across the application.
- **public/:** Contains static assets such as images or fonts.
- **utils/:** Contains utility functions or helper modules used across the application.

## Usage
To start the development server, run:
```bash
npm run dev
```
Visit http://localhost:3000 in your browser to view the application.

## License
This project is licensed under the MIT License.
