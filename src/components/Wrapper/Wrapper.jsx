import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Section from '../Section/Section';
import s from './Wrapper.module.css';

class Wrapper extends Component {
  state = {
    contacts: [{ id: 'testID', name: 'testName', number: 'testNumber' }],
  };

  formSubmitHanler = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <div className={s.wrapper}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHanler} />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default Wrapper;
