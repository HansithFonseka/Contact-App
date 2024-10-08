import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

import './App.css';

function App() {
  const contacts = [
    {
      id: "1",
      name: "Jimmy",
      email: "jimmyandi@gmail.com",
    },
    {
      id: "2",
      name: "Broad",
      email: "broadst@gmail.com"
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
