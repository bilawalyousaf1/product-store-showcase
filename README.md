# Product Store Showcase

A responsive product display web application that fetches live product data from a REST API and renders it as a modern card-based interface. Features a persistent light/dark theme toggle and dynamic loading states.

## Features

- Fetches real product data from an external API using Axios
- Displays products in a responsive card grid layout
- Shows product image, title, price, category, and description
- Includes random rating, stock status indicator, and formatted date
- Fallback placeholder image if the original image fails to load
- Animated loading indicator during data retrieval
- Light / dark theme toggle with visual icon feedback
- Error handling for API requests

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations, CSS Variables for Theming)
- JavaScript (ES6+ Modules, Async/Await)
- [Axios](https://axios-http.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

## Project Structure

## What I Learned

- Implementing asynchronous data fetching with `async/await` and `try/catch`
- Consuming a third-party REST API and transforming JSON data for the UI
- Dynamically generating complex HTML structures using JavaScript
- Building a theme switcher that persists user preference during the session
- Enhancing user experience with loading states and image error fallbacks
