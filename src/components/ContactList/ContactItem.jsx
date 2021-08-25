import s from './ContactList.module.css';

function ContactItem({ name, number }) {
  return (
    <li className={s.item}>
      {name}: {number}
    </li>
  );
}

export default ContactItem;
