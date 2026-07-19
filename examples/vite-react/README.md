# Nucleus CSS + Vite (React)

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install @navital/nucleus-css
```

Import the framework once in your entry file (`src/main.jsx`):

```js
import "@navital/nucleus-css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Then use `n-`-prefixed classes with `className`. See [`src/App.jsx`](src/App.jsx).

Validate your markup before shipping:

```bash
npx @navital/nucleus-css validate ./src
```

### Only want part of the framework?

```js
import "@navital/nucleus-css/reset";       // tokens + reset (import first)
import "@navital/nucleus-css/utilities";
import "@navital/nucleus-css/components";
import "@navital/nucleus-css/themes";
```
