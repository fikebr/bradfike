https://www.youtube.com/watch?v=I2UBjN5ER4s
https://contactmentor.com/best-react-projects-for-beginners-easy/

# react-router-dom

- https://www.npmjs.com/package/react-router-dom
- https://github.com/remix-run/react-router#readme
- https://reactrouter.com/en/main

## Switch no longer exists. replace it with Routes

## Basic code...
```
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

```

---
#  vscode-react-javascript-snippets
- https://github.com/ults-io/vscode-react-javascript-snippets/blob/master/docs/Snippets.md

# Starting a new React app
npx create-react-app react_crud
cd react_crud
npm config set legacy-peer-deps=true -L "project"
npm install react-bootstrap bootstrap

--- update App.js
import 'bootstrap/dist/css/bootstrap.min.css';
