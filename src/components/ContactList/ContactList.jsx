import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ feedbackList, onDelete }) => {
  return (
    <ul className={s.list}>
      {feedbackList.map(({ id, name, number }) => (
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
