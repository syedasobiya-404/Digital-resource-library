\# Digital Resource Library



A responsive Digital Resource Library built as part of \*\*Project 1 — The Responsive Layout\*\* for the DecodeLabs Full Stack Development Internship Program.



The project demonstrates core frontend development skills using \*\*HTML5, CSS3, and Vanilla JavaScript\*\*, with a focus on semantic HTML, responsive layouts, CSS Grid, Flexbox, and interactive filtering and search functionality.



\## Project Overview



The Digital Resource Library is a dashboard-style learning hub where users can browse and search through categorized learning resources.



The interface is designed using a \*\*mobile-first approach\*\* and adapts across mobile, tablet, and desktop screen sizes.



The project includes:



\* Responsive dashboard layout

\* Desktop sidebar navigation

\* Mobile hamburger navigation

\* Resource category filtering

\* Real-time search functionality

\* Responsive resource card grid

\* Semantic HTML5 structure

\* CSS Grid for page-level layouts

\* Flexbox for component-level alignment

\* Fluid typography using `clamp()`

\* Clean and modern UI styling



\## Features



\### Responsive Layout



The interface is built with a mobile-first strategy and adapts to different viewport sizes:



\* Mobile: Single-column layout with collapsible navigation

\* Tablet: Two-column resource card grid

\* Desktop: Fixed sidebar with three-column resource grid



\### Category Filtering



Resources can be filtered by category:



\* All Resources

\* Web Development

\* Business \& Startups

\* Teaching \& Pedagogy

\* Skincare \& Wellness



The category filter is implemented using Vanilla JavaScript.



\### Real-Time Search



Users can search resources by entering keywords into the search field.



The search functionality checks both:



\* Resource titles

\* Resource descriptions



Search and category filtering work together to display only matching resources.



\### Mobile Navigation



On smaller screens, the sidebar is hidden by default and can be opened using the hamburger menu.



On desktop screens, the sidebar remains visible as part of the main dashboard layout.



\## Technologies Used



\* HTML5

\* CSS3

\* Vanilla JavaScript



\### CSS Concepts



\* CSS Grid

\* Flexbox

\* Media Queries

\* CSS Custom Properties

\* Responsive Design

\* Mobile-First Development

\* Fluid Typography

\* Transitions and Hover Effects



\### JavaScript Concepts



\* DOM Manipulation

\* Event Listeners

\* `querySelectorAll()`

\* `getAttribute()`

\* Dynamic filtering

\* Real-time search

\* Class manipulation

\* Conditional rendering



\## Project Structure



```text

digital-library/

│

├── index.html

│

├── css/

│   └── style.css

│

├── js/

│   └── main.js

│

└── README.md

```



\## Design Approach



The project follows the design and development principles specified for DecodeLabs Project 1.



\### Semantic HTML



Semantic HTML5 elements are used to create a meaningful and accessible page structure.



Examples include:



\* `<header>`

\* `<nav>`

\* `<main>`

\* `<section>`

\* `<article>`

\* `<footer>`



\### Mobile-First Development



The base styles are designed for smaller screens first. Larger layouts are introduced through responsive media queries.



```css

@media (min-width: 768px) {

&#x20;   /\* Tablet layout \*/

}



@media (min-width: 1024px) {

&#x20;   /\* Desktop layout \*/

}

```



\### Grid and Flexbox



CSS Grid is used for the main dashboard and resource card layouts, while Flexbox is used for smaller component-level arrangements.



This separation helps maintain a clear and scalable layout structure.



\## Color Palette



The interface uses a warm, neutral visual palette:



| Purpose          | Color     |

| ---------------- | --------- |

| Main Background  | `#F2F0EA` |

| Card Surface     | `#FFFFFF` |

| Primary Text     | `#2B2D42` |

| Muted Text       | `#5C677D` |

| Primary Accent   | `#A0D4E0` |

| Secondary Accent | `#A5886F` |

| Hover Accent     | `#86C1D0` |

| Border           | `#E2E2DF` |



\## Responsive Breakpoints



| Breakpoint       | Layout                                        |

| ---------------- | --------------------------------------------- |

| Below 768px      | Mobile, single-column layout                  |

| 768px and above  | Tablet, two-column resource grid              |

| 1024px and above | Desktop, sidebar + three-column resource grid |



\## Screenshots



Screenshots of the completed project can be added below.



\### Desktop View



<!-- Add your desktop screenshot here -->



!\[Desktop View](./screenshots/desktop.png)



\### Tablet View



<!-- Add your tablet screenshot here -->



!\[Tablet View](./screenshots/tablet.png)



\### Mobile View



<!-- Add your mobile screenshot here -->



!\[Mobile View](./screenshots/mobile.png)



\### Search and Filtering



<!-- Add a screenshot showing the search/filter functionality here -->



!\[Search and Filtering](./screenshots/search-filter.png)



> Replace the image paths above with the actual names and locations of your screenshots.



\## How to Run the Project



Since this project uses only HTML, CSS, and Vanilla JavaScript, no package installation or build process is required.



\### 1. Clone the repository



```bash

git clone <your-repository-url>

```



\### 2. Open the project



Navigate to the project directory:



```bash

cd digital-library

```



\### 3. Run the project



Open `index.html` directly in your browser.



For development, you can also use the \*\*Live Server\*\* extension in Visual Studio Code.



\## Project Requirements



This project was developed according to the requirements of DecodeLabs Project 1:



\* HTML5, CSS3, and Vanilla JavaScript only

\* No frontend frameworks or CSS frameworks

\* Mobile-first responsive design

\* Semantic HTML5 structure

\* CSS Grid for macro layouts

\* Flexbox for component layouts

\* Responsive media queries

\* JavaScript-based interactivity

\* Accessibility-conscious markup

\* Clean and maintainable code structure



\## Learning Objectives



This project was developed to strengthen fundamental frontend development skills before progressing to backend development.



Key learning objectives include:



\* Building responsive layouts from scratch

\* Understanding CSS Grid and Flexbox

\* Structuring pages with semantic HTML

\* Writing Vanilla JavaScript for interactive features

\* Combining search and category filtering

\* Creating responsive navigation

\* Working with CSS variables

\* Applying responsive design principles

\* Organizing frontend project files professionally



\## Future Improvements



Potential improvements for future versions include:



\* Adding more learning resources

\* Creating individual resource detail pages

\* Adding resource bookmarking

\* Adding dark mode

\* Improving accessibility features

\* Adding persistent user preferences

\* Connecting the library to a backend database

\* Adding authentication and user accounts



\## Author



\*\*Syeda Sobiya\*\*



Software Development Intern

DecodeLabs



\## Project Context



This project was developed as part of the \*\*DecodeLabs Full Stack Development Internship Program — Project 1: The Responsive Layout\*\*.



The project focuses on demonstrating strong frontend fundamentals before progressing to backend and database-based assignments.



