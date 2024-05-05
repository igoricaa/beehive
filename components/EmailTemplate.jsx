import * as React from 'react';

export const EmailTemplate = ({ name, message }) => (
  <div>
    <h1>Mejl sa kontakt forme sajta</h1>
    <p>Ime: {name}</p>
    <p>Poruka: {message}</p>
  </div>
);
