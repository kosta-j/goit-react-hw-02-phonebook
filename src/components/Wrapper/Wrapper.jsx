import { Component } from 'react';
import Section from '../Section/Section';
import Form from '../Form/Form';

class Wrapper extends Component {
  state = {
    contacts: [],
    // name: '',
  };

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };
  formSubmitHanler = data => {
    // this.setState(data)
    console.log(data);
  };

  render() {
    return (
      <div className="wrapper">
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHanler} />
        </Section>
        <Section title="Contacts"></Section>
      </div>
    );
  }
}

export default Wrapper;
