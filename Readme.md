# NVM, React and Vite

Compiled  by Tan Bee Hoon (contact: tbeehoon@gmail)

This readme shows: 

1. Task1 - Explain React Core Features and its advantages.

2. Task2 - **Set Up a Basic React Environment**

3. Task3 - **Create and Render Functional Components**

4. Task4 - **Use JSX for Structuring Components** 

5. How to set up the environment for NVM, React and Vite.

   

## 1. Task1 - Explain React Core Features and its advantages

### 1.1 React Core Features

The following is a brief explanation of React’s core features: component-based architecture, Virtual DOM, and unidirectional data flow

#### 1.1.1 **Component-Based Architecture**

- React applications are built using reusable, self-contained components.

- component encapsulates its own structure, logic, and style, making code modular and easier to maintain.

- Components can be nested, managed, and reused throughout the application.
- Components accept **props** (inputs) and manage internal **state**, then compose together like Lego bricks to form whole pages.
- This keeps concerns local and makes reuse easy.

#### 1.1.2 **Virtual DOM**

- React uses a Virtual DOM, which is a lightweight copy of the actual DOM.

- When the state of an object changes, React updates the Virtual DOM first, then efficiently updates only the changed parts in the real DOM.
- When state changes, React computes the minimal set of real DOM updates via a diff (“reconciliation”) and applies them efficiently, often batching multiple updates. 

- This approach improves performance, especially in large and dynamic applications.

#### 1.1.3**Unidirectional Data Flow**

- Data in React flows in a single direction, from parent to child components via props.
- State changes trigger re-renders that propagate downward.
- This single direction makes data paths explicit and easier to trace. 

- This makes the data flow predictable and easier to debug, as changes in the application state are managed in a controlled way.

  

### 1.2 Advantages

These features collectively enable developers to build scalable, high-performance, and maintainable web applications.

- Maintainability: The component-based structure allows developers to break down complex UIs into smaller, manageable pieces, making code easier to read, test, and maintain.

- Performance: The Virtual DOM minimizes direct manipulation of the real DOM, resulting in faster updates and a smoother user experience.

- Predictability: Unidirectional data flow ensures that data changes are predictable and traceable, reducing bugs and making applications easier to debug.

- Reusability: Components can be reused across different parts of an application or even in different projects, speeding up development and ensuring consistency.

---



## 2. Task 2 - Set Up a Basic React Environment

Required task details: 

a) Create an HTML file and include CDN links for React and ReactDOM. 

b) Add a <div> with an id of "root" in the HTML body. 

c) Write a simple React component inside a <script> tag and use ReactDOM.render() to render it to the page. 

The codes for the above tasks:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React CDN Example</title>
  <!-- React and ReactDOM CDN links -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <!-- Babel for JSX support in the browser, just for this example task-->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <!-- Root div for React -->
  <div id="root"></div>
  <!-- React code -->
  <script type="text/babel">
    function HelloWorld() {
      return <h1>Hello, React from CDN!</h1>;
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<HelloWorld />);
  </script>
</body>
</html>
```

Screen captures for the above code:

![](./public/Task2-code.jpg)

Screen captures for the above in browser:

![](./public/Task2-screen.jpg)

----



## 3. Task 3 - Create and Render Functional Components

Required task details: 

a) Define a functional React component (e.g., GreetingComponent) that returns a simple JSX element. 

b) Render the component using ReactDOM.render() to display it on the page.

> [!IMPORTANT]
>
> Note: The local machine setup is using **React version 18**. Thus, not able to use **ReactDOM.render()**. Instead, **React version 18** and above with Vite, expect to use createRoot. Thus, part (b) of the task is modified slightly to use the supported **createRoot(...).render(...)**



The 3 files are modified to complete the task:

a. **GreetingComponent**: Created as a separate file (src/GreetingComponent.jsx) that returns a simple JSX element.  

![](./public/Task3-component.jpg)

b. **main.jsx**: Imports and renders GreetingComponent instead of App. Uses **createRoot(...).render(...)** instead of **ReactDOM.render()**.

![](./public/Task3-main.jpg)

c. **index.html:**  Matches the Vite template (no Babel or CDN scripts, add a root div and a module script for main.jsx).

![](./public/Task3-index.jpg)

d. run the command "**npm run dev**"

![](./public/Task3-command.jpg)

e. check the browser 

![](./public/Task3-browser.jpg)



---

### 4. Task 4 - **Use JSX for Structuring Components ** 

Required task details: 

a) Create a component that renders a list of items (using an unordered list) and a heading (e.g., "My To-Do List"). 

b) The component should display at least three items in the list using JSX. 

The 4 files are modified to complete the task:

a. **GreetingComponent**: using the same  file (src/GreetingComponent.jsx) that returns a simple JSX element with slight modification. 

b. **TodoList**: create a new file (src/TodoList.jsx) that contains the TodoList component and exports it as default. Also, use React-Bootstrap components for layout.

![](./public/Task4-todolist.jpg)

c. **App.jsx**: Imports and renders both GreetingComponent and TodoList. 

![](./public/Task4-app.jpg)

d. **main.jsx**: renders only the App component as the root of your application.

This makes App the main entry point for the UI, and all other components are organized and rendered through it. 

Also the import of Bootstrap CSS is in src/main.jsx at the very top. This makes Bootstrap styles available globally in the app.

![](./public/Task4-main.jpg)

e. **index.html**: Not much change the in this file, only slight change to update the title and the favicon 

![](./public/Task4-index.jpg)

f. run the command "**npm run dev**" and check output. 

![](./public/Task4-browser.jpg)

g. Final git push for todolist app is pushed to the following github repo: 

https://github.com/tbeehoon/todo-app/tree/main



---



## 5. How to set up the environment

### 5.1 Install NVM (Node Version Manager) 

If NVM is not installed yet, download the latest `nvm-setup.exe` from the releases page: https://github.com/coreybutler/nvm-windows/releases

> [!TIP]
>
> Avoid installing the “global” Node.js from nodejs.org if using NVM. 



### 5.2 Install Node.js via NVM and set a default

Install the version required (LTS recommended):

```
# Install latest LTS
nvm install lts

# Use it now
nvm use lts
```

Do verification:

```
# Verify
node -v
npm -v
```

![](./public/setup1.jpg)

### 5.3 Create a new React app with Vite

From any workspace folder in your terminal:

```
npm create vite@latest module8part2
```

![image-20250914182632376](./public/setup1.jpg)

Then install dependencies and run the dev server:

```
cd my-app
npm install
npm run dev
# Vite typically starts at http://localhost:5173
```

> [!TIP]
>
> Ctl-C to exit

![](./public/setup3.jpg)



### 5.4 Add Bootstrap to the React project (Optional)

Install Bootstrap and its dependencies:

```
npm install bootstrap react-bootstrap
```

Import Bootstrap styles in src/main.jsx` (or `src/main.tsx` for TypeScript):

```
import 'bootstrap/dist/css/bootstrap.min.css'
```

Ready to use Bootstrap classes and React-Bootstrap components in app.

Example in `App.jsx`:

```
import Button from 'react-bootstrap/Button'

function App() {
return (
<div className="p-4">
    <h1>Hello, Bootstrap + React + Vite!</h1>
    <Button variant="primary">Click Me</Button>
</div>
)
}

export default App
```



### 5.5 Add Routing to the React project (Optional)

Install Router and its dependencies:

```
npm install react-router-dom
```

Ready to use React Routing in app.

Example in `App.jsx`:

```
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```



### 5.5 Initialize Git

Version control the project using Git.

```
# Initialize a git repository
git init

# Add all project files
git add .

# Commit the files
git commit -m "Initial commit: setup React + Vite project"
```

To add to Github.

```
# Add remote 
git remote add origin https://github.com/username/my-app.git

# Push changes
git branch -M main
git push -u origin main
```

> [!TIP]
>
> In case identity need to be authenticated:

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```



### 5.6 Setup .gitignore

Add a `.gitignore` file in the root of the project to exclude files and folders not required in version control. Some examples of items to include:

```
# dependencies
/node_modules

# production build
/dist

# logs
npm-debug.log*
*.log

# environment variables
.env
.env.local
.env.*.local

# IDE/editor folders
.vscode/
.DS_Store

# Vite cache
.vite/
```

---



@Q.E.D.