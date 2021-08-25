import s from './ContactList.module.css';

function ContactItem({ id, name, number, onClick }) {
  return (
    <li className={s.item}>
      {name}: {number}
      <button type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
}

export default ContactItem;
