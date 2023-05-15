// use git add . and git commit and git push frequently in case something happens to your machine, it's online
// inside "scripts" inside package.json, add
  // "start": "react-scripts start",
  // "build": "react-scripts build";

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components';

const root = createRoot(document.querySelector("#app"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);