import React from "react";
import ContactList from "./ContactList";
import {getData} from "./data";

function ContactsApp() {
    const contacts = getData();

    return (
        <div className="contacts-app">
            <h1 className="contacts-app__title">Contacts</h1>
            <ContactList contacts={contacts} />
        </div>
    );
}

export default ContactsApp;
