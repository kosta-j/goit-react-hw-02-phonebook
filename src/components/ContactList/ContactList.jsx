import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteBtnClick }) {
  return (
    <ul className={s.contactList}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={onDeleteBtnClick}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
