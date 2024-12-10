Todoist Application with Advanced Task Filtering
This project is a Todoist application designed to meet specific requirements and offer advanced task filtering capabilities. The application allows users to create, manage, and filter tasks efficiently, with a focus on a clean, maintainable codebase and responsive design.

Features
Task Creation:

Input fields for task title and description.

"Add" button to create new tasks.

Task Management:

Checkbox to indicate task status (completed or not).

Delete tasks functionality.

Completed tasks are displayed after incomplete tasks.

Filter to show only incomplete tasks.

Advanced Filtering:

Hide Completed: Toggle to hide completed tasks.

Search: Case-insensitive filtering by title and description.

Severity Filtering: Multi-select checkboxes to filter by task importance.

Tag Filtering: Multi-select checkboxes to filter by tags (e.g., #mmf).

Additional Constraints:

Functional components are not allowed.

Separate component for task display.

Task names must not be empty or contain leading/trailing spaces.

Each task displays the creation time.

Option to delete a task appears on hover.

Consistent code style and clear naming conventions.

No unnecessary comments, files, or unused code.

Additional Features (Optional):

Comment in the main component about additional tasks completed.

Responsive design for different screen sizes.

Edit task functionality.

Button to generate 1000 tasks for testing.

Debounce filtering to minimize excessive re-renders.

Project Structure
Todoist-App/
│
├── src/
│   ├── components/
│   │   ├── Task.js            # Task display component
│   │   └── TaskList.js        # Main task list component
│   │
│   ├── utils/
│   │   └── helpers.js         # Helper functions for validation, etc.
│   │
│   ├── App.js                 # Main application component
│   ├── index.js               # Entry point
│   └── styles.css             # CSS styles (TailwindCSS, CSS modules, or SCSS modules)
│
├── public/
│   ├── index.html             # HTML template
│
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
Installation
Prerequisites
Node.js

npm or yarn

Setup Instructions
Clone the repository:

bash
git clone https://github.com/yourusername/todoist-app.git
Navigate to the project directory:

bash
cd todoist-app
Install the dependencies:

bash
npm install
# or
yarn install
Start the development server:

bash
npm start
# or
yarn start
Open http://localhost:3000 in your browser to view the application.

Usage
Add a new task by entering a title and description, then clicking "Add".

Mark tasks as completed by checking the checkbox.

Delete tasks by hovering over them and clicking the delete button.

Use filters to show only incomplete tasks, search by title/description, filter by severity, and filter by tags.

Contributing
Fork the repository.

Create a new branch.

Make your changes.

Submit a pull request.

License
This project is open-source and available under the MIT License.
