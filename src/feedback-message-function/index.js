import React from 'react';

export default propiedades => (
  <div>
    <p>Saludo desde una funcion</p>
    <p>Bienvenido {propiedades.nombre} a {propiedades.app}</p>
  </div>
)