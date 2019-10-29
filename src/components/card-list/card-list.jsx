import React from 'react';

import { Card } from '../card/card';

export const CardList = props => {
  return (
    <div>
      {props.monsters.map(m => (
        <Card key={m.id} monster={m} />
      ))}
    </div>
  );
};

export default CardList;
