import s from './ContactList.module.css';

function ContactItem({ name, number, children }) {
  return (
    <li className={s.item}>
      {name}: {number}
      {children}
    </li>
  );
}

export default ContactItem;
