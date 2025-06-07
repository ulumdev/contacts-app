import React from "react";
import {createRoot} from "react-dom/client";
import ContactsApp from "./components/ContactsApp";

import "./styles/style.css"; // Assuming you have a styles.css file for styling

const root = createRoot(document.getElementById("root"));
root.render(<ContactsApp />);