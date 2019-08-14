import React, { Component } from 'react';

// class FeedbackMessage extends Component {
//   render() {
//     return (
//       <div>
//         <p>Saludo desde otro componente</p>
//         <p>Bienvenido {this.props.nombre} a {this.props.app}</p>
//       </div>
//     )
//   }
// }

// export default FeedbackMessage;

export default propiedades => (
  <div>
    <p>Saludo desde otro componente</p>
    <p>Bienvenido {propiedades.nombre} a {propiedades.app}</p>
  </div>
)