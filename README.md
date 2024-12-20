# Candidate Dashboard Project

Welcome to the Candidate Dashboard Project! This is a responsive and interactive web application designed to display and filter candidates based on various criteria. The dashboard is built using modern web technologies that focus on performance, scalability, and a smooth user experience.

## Tech Stack

### 1. **Next.js** (React Framework)
   - **Why Next.js?**  
     Next.js is a powerful React framework that provides a lot of built-in features, including server-side rendering (SSR), static site generation (SSG), API routes, and more. It's ideal for building fast and scalable applications.
   - **Benefits**:
     - **SSR and SSG**: Automatically handles rendering on the server side and static site generation, ensuring better performance and SEO.
     - **File-based Routing**: Simplifies routing by automatically mapping file structure to routes.
     - **Optimized Performance**: Automatic code-splitting and lazy loading for faster initial loads.

### 2. **TypeScript**
   - **Why TypeScript?**  
     TypeScript is a statically typed superset of JavaScript. It brings type safety to JavaScript, reducing the chances of bugs and improving code maintainability.
   - **Benefits**:
     - **Static Typing**: Helps to catch potential errors during development.
     - **Improved Developer Experience**: Provides autocompletion, type checking, and better refactoring tools.
     - **Better Scalability**: TypeScript's type system makes it easier to scale and maintain the application as it grows.

### 3. **Tailwind CSS**
   - **Why Tailwind CSS?**  
     Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to design your web applications without having to leave your HTML or JSX.
   - **Benefits**:
     - **Fast Styling**: With Tailwind, you can build responsive, custom designs directly in your markup, significantly speeding up the development process.
     - **Customizability**: Tailwind's configuration allows you to extend and customize the default design system to suit your needs.
     - **Utility-First Approach**: Allows for flexible and reusable components without the need for writing complex custom CSS.

### 4. **Framer Motion**
   - **Why Framer Motion?**  
     Framer Motion is a popular animation library for React that makes it easy to create smooth and interactive animations and transitions.
   - **Benefits**:
     - **Declarative Animations**: Animations are simple to implement with a declarative API, making them easier to control and manage.
     - **Performance**: It is optimized for performance and ensures smooth animations, even on mobile devices.
     - **Customizable Transitions**: Allows for fine-grained control over animation timing, easing, and sequencing.

### 5. **Shadcn UI**
   - **Why Shadcn UI?**  
     Shadcn UI is a set of modern, customizable, and responsive UI components for React. It integrates seamlessly with Tailwind CSS to create beautifully designed interfaces.
   - **Benefits**:
     - **Pre-built Components**: Save time by using pre-styled, customizable components.
     - **Tailwind Integration**: Leverages Tailwind's utility-first approach, allowing for easy customization without writing custom CSS.
     - **Accessibility**: Ensures that the UI components are built with accessibility in mind.

### 6. **Context API**
   - **Why Context API?**  
     React's Context API is used to manage and share state across the application without the need for prop drilling. It simplifies state management, especially for global states like authentication, theme, or search filters.
   - **Benefits**:
     - **Global State Management**: Easily share data across multiple components without passing props manually.
     - **Simplicity**: Provides a lightweight solution for state management, especially compared to more complex solutions like Redux.

---

### Approach

In developing this **Candidate Dashboard** project, my primary focus was on creating a **responsive** and **interactive user interface** that allows easy **management and filtering of candidates**. I utilized the following key steps:

1. **Component-Based Architecture:** The project is organized into reusable components, each responsible for rendering specific sections such as the search bar, candidate cards, and analytics. This modular approach promotes reusability and maintainability.
   
2. **State Management:** For managing the state of various elements, I used **React's Context API**. This allows for efficient state management across the application, ensuring components are kept in sync, especially when filters or search terms are updated.
   
3. **Search and Filter Functionality:** I implemented a flexible search bar and filtering system to allow users to search candidates by **name**, **job**, and **contact**. This was achieved using simple JavaScript filtering methods on the data.
   
4. **Responsive Design:** I used **Tailwind CSS** to design a fully responsive layout that adjusts seamlessly across different screen sizes, ensuring the dashboard is accessible and user-friendly on both desktop and mobile devices.

5. **Smooth Animations:** **Framer Motion** was used to add animations to various elements like candidate cards and the transition between different states (e.g., when a candidate is selected or when search results are updated). This creates a polished, interactive user experience.

---

### Assumptions Made

While developing this project, I made a few assumptions to simplify certain aspects of the implementation:

1. **Backend/API Integration Not Required:** The project was intended as a **frontend-only** solution, and therefore I did not integrate a backend or database. All candidate data is provided in a static array within the code, simulating a backend response.
   
2. **Fixed Candidate Data:** The list of candidates was assumed to be static, meaning no real-time updates or database connections were required. If this were a live application, I would have used an API to fetch candidate data dynamically.
   
3. **Simplified Search Functionality:** I implemented basic search functionality, allowing users to filter candidates by name, job, or contact. This approach works well for a small dataset but would need to be enhanced for a larger application (e.g., with server-side search capabilities or paginated data).
   
4. **No User Authentication:** The dashboard does not include user authentication or authorization mechanisms. The assumption here is that the project focuses solely on the frontend functionality, and user-specific data or session management is outside the scope.

5. **No Extensive Error Handling:** Since this is a simple dashboard, I didn't implement advanced error handling (e.g., for failed API requests, invalid inputs, etc.). However, in a production environment, I would prioritize handling such edge cases to ensure the app's robustness.

---

## Features

- **Searchable Candidates**: Users can search candidates based on their name, job, or contact.
- **Filter Options**: Provides filters to sort and view candidates based on various criteria like job, experience, or application date.
- **Analytics Dashboard**: A built-in analytics section displays key metrics, like the number of applicants over time, with hover functionality to view detailed data.
- **Responsive Design**: The layout adapts seamlessly across all screen sizes, from mobile devices to desktops.
- **Animations**: Smooth transitions and animations enhance the user experience, making it more interactive and engaging.

---

## Running the Project

Follow the steps below to run the project locally:

### Prerequisites

Ensure you have the following installed:
- **Node.js** (version 16 or higher) – [Download Node.js](https://nodejs.org/)
- **npm** or **Yarn** (package managers)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Tk-brainCodes/morawe-venture-frontend-test.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd morawe-frontend-dashboard
   ```

3. **Install dependencies**:
   Using **npm**:
   ```bash
   npm install --force
   ```

   Or, using **Yarn**:
   ```bash
   yarn install
   ```

4. **Run the development server**:
   Using **npm**:
   ```bash
   npm run dev
   ```

   Or, using **Yarn**:
   ```bash
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`. You should see the project running locally.

---

## Folder Structure

- `app/`: Contains the main pages of the application, including `index.tsx`, `(main)/dashboard`, and others.
- `components/`: Includes reusable React components such as `CandidateCard`, `Header`, `Sidebar`, etc.
- `constants/`: Contains static data such as the list of candidates and sidebar items.
- `assets/`: Contains images and svg icons used in the codebase.
- `context/`: Contains React Context for managing global state (such as search filters or user data).



