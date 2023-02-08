# Message Board App

This is a simple message board app built with the PERN stack (PostgreSQL, Express, React, and Node.js). Users can post messages and leave comments on other users' messages. 

## Features
- Create and read messages and comments
- Update and delete messages and comments
- Responsive design for optimal user experience

## Technical Details
- The backend is built with Node.js and Express for the REST API.
- PostgreSQL is used as the database to store users, messages, and comments.
- The frontend is built with React for a seamless and responsive user experience.

## Getting Started
1. Clone the repository to your local machine
2. Navigate to the project directory and run `npm install` to install all dependencies
3. Set up your PostgreSQL database and update the database configuration in the `.env` file
```
PORT=3023
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=messageboard
PG_USER=postgres
```
4. Run `npm run start` to start the development server and visit `http://localhost:3000` in your browser to see the app in action

## Contribute
This project is open source and contributions are welcome! If you find any bugs or have suggestions for new features, please feel free to create an issue or make a pull request.

## Links
- [Backend Repo](https://github.com/PESolut/fs-portfolio-app-backend)
- [Frontend Repo](https://github.com/PESolut/fs-portfolio-app-frontend/)
