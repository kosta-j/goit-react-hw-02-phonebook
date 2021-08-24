// import { Component } from "react";

// class Form extends Component {
//   state = {
//     name: "qwq",
//   };

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("form returns:" + this.state);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// export default Form;
