# Event Creation App

This is a simple event creation web application built with React. It allows users to create events and view a list of created events. The application uses React Router for navigation between the event creation and event listing pages.

## Features

- Create events with a name, date, and description.
- View a list of created events.
- Navigation between event creation and event listing pages.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/event-creation-app.git
   cd event-creation-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

- **Create Event**: Navigate to the "Create Event" page, fill in the event details, and submit the form to create a new event.
- **Event List**: Navigate to the "Event List" page to view the list of created events.

## Project Structure

```
event-creation-app/
├── public/
├── src/
│   ├── components/
│   │   ├── EventForm.js
│   │   ├── EventList.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## Components

- **EventForm**: A form component for creating new events.
- **EventList**: A component for displaying the list of created events.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
