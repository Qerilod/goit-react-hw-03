import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ FeedbackList, onDelete }) => {
  return (
    <ul className={s.list}>
      {FeedbackList.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
