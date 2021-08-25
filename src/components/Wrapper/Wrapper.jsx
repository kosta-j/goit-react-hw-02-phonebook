import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from '../Form/Form';
import Section from '../Section/Section';

class Wrapper extends Component {
  state = {
    contacts: [],
  };

  formSubmitHanler = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <div className="wrapper">
        {console.log(this.state)}
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHanler} />
        </Section>
        <Section title="Contacts"></Section>
      </div>
    );
  }
}

export default Wrapper;
