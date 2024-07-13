import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [FeedbackList, setFeedbackList] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("Contacts"));
    if (savedData) {
      return savedData && savedData.length > 0
        ? savedData
        : [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
          ];
    }
  });

  const [filter, setFilter] = useState("");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleAddContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setFeedbackList((prevList) => [...prevList, newContact]);
  };

  const filteredContacts = FeedbackList.filter((contact) =>
    contact.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    setFeedbackList((prevList) =>
      prevList.filter((contact) => contact.id !== id)
    );
  };
  useEffect(() => {
    window.localStorage.setItem("Contacts", JSON.stringify(FeedbackList));
  }, [FeedbackList]);
  return (
    <div>
      <h1 style={{ color: "green", paddingLeft: "40px" }}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList FeedbackList={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
