# FoxInsights

## Description

This project is a web application built with Next.js, and Chakra UI. It provides functionalities for user authentication using Google, with pages for the dashboard and team management. The project also includes components such as Navbar, sessionwrapper and Login.

## Project Setup

### Dependencies

- **Node.js:** Ensure you have Node.js installed on your machine.
- **Next.js:** Install Next.js globally or as a project dependency.
- **Chakra UI:** Install Chakra UI for styling and UI components.

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
- **styles/:** Contains global styles or CSS modules used across the application.
- **public/:** Contains static assets such as images or fonts.

## Usage

To start the development server, run:

```bash
npm run dev
```

Visit http://localhost:3000 in your browser to view the application.

## License

This project is licensed under the MIT License.
