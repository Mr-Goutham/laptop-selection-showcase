# Laptop Selection Showcase

## Overview
The **Laptop Selection Showcase** is a dynamic web application designed to assist users in exploring and selecting laptops tailored to their preferences. This application provides features such as filtering laptops by category, searching for specific brands or models, and displaying detailed information about each laptop, including specifications, price, and more. It offers an intuitive and user-friendly experience to simplify the laptop selection process.

## Project Structure
laptop-selection-showcase
├── assets
│ ├── css
│ │ └── style.css
│ ├── js
│ │ ├── laptop_data.js
│ │ └── script.js
├── index.html
└── README.md

## File Descriptions
- **index.html**: The main HTML file that structures the webpage. It links to the associated CSS for styling and JavaScript for dynamic functionality. This file includes the header, control section (filter, search, and download buttons), and the dynamic area where the laptops are displayed.
  
- **assets/css/style.css**: The CSS file that defines the visual appearance of the website, including layout, color schemes, typography, and responsiveness. The styles enhance the user experience across both light and dark themes.

- **assets/js/laptop_data.js**: This JavaScript file contains the dataset of laptops in JSON format. It exports an array of objects, each representing a laptop with specifications, category, and price information. This data is used to dynamically populate the laptop list.

- **assets/js/script.js**: The script file that handles the interactive features of the website. It includes functionality to filter the laptop list based on user input (category or search), toggle between light and dark modes, and dynamically update the displayed list of laptops.

## Setup Instructions
1. Clone the repository to your local machine using `git clone <repository-url>`.
2. Open the project folder in your preferred code editor (e.g., Visual Studio Code, Sublime Text).
3. Launch `index.html` in any modern web browser to view the application in action.

## Usage
- Use the dropdown menu to filter laptops by category (e.g., Gaming, Business, Student).
- Enter a brand name or model in the search box to search for specific laptops.
- The list of laptops will automatically update based on your selected category and search query.
- Optionally, use the "Download List" button to download the current list of displayed laptops.

## Dark Mode
The application supports both light and dark modes. Toggle between modes using the "Toggle Dark Mode" button in the header to adjust the visual theme according to user preference.

## Contributing
We welcome contributions to improve and enhance the functionality of this project. To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request to merge your changes into the main repository.

If you encounter any issues or have suggestions, please open an issue or submit a pull request.