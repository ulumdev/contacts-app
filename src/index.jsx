import React from "react";
import {createRoot} from "react-dom/client";
import ContactsApp from "./ContactsApp";

const root = createRoot(document.getElementById("root"));
root.render(<ContactsApp />);