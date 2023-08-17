# User Management Application

This is a CRUD (Create, Read, Update, Delete) application built using React to manage users. It utilizes a publicly available API, JSONPlaceholder, to perform various user management tasks. The application allows users to fetch, create, update, and delete user data.

## Features

- Fetch Users: Fetches a list of users from the JSONPlaceholder API and displays their basic information like name, email, and phone in a list or table format.

- Create User: Provides a form to create a new user. The new user data is sent as a POST request to the JSONPlaceholder API, simulating user creation.

- Update User: Each user entry has an 'Edit' button. Clicking this button displays a form pre-filled with the user's data, allowing users to make changes. Upon submission, a PUT request is made to the JSONPlaceholder API to simulate updating user data.

- Delete User: Each user entry also features a 'Delete' button. Clicking this button triggers a DELETE request to the JSONPlaceholder API, simulating user deletion.

## Additional Requirements

- Developed using React functional components and React Hooks such as useState and useEffect.

- Styled for a visually appealing user interface. The layout is responsive and suitable for both desktop and mobile devices.

- Error handling is implemented, ensuring that users are informed if API requests fail.

- The code is well-documented with comments to enhance readability.

- User interactions are designed for a smooth and intuitive experience.

## Optional Advanced Feature

- Loading Spinner/Skeleton Screen: While API requests are being processed, a loading spinner or skeleton screen is displayed to enhance user experience.

## Getting Started

1. Clone this repository.
2. Navigate to the project directory using your terminal.
3. Install project dependencies using the command: `npm install`
4. Run the development server: `npm start`
5. Access the application by opening the provided URL in your web browser.

## Technologies Used

- React
- React Hooks (useState, useEffect)
- JSONPlaceholder API
- react-router (optional, for advanced feature)

## License

This project is licensed under the [MIT License](LICENSE).
