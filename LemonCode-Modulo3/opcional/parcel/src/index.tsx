import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello.component.jsx";
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloComponent />
  </div>
);
