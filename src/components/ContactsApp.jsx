import React from "react";
import ContactList from "./ContactList";
import {getData} from "../utils/data";

function ContactsApp() {
    const contacts = getData();

    return (
        <div className="contact-app">
            <h1 className="contact-app__title">Contacts</h1>
            <ContactList contacts={contacts} />
        </div>
    );
}

export default ContactsApp;
