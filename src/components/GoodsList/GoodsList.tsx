import React from 'react';
import { Goods } from '../Interfaces/Interfaces';

import './GoodsList.css';

interface Props {
  goods: Goods[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods__list list">
      {goods.map(good => (
        <li className="list__item" key={good.id} style={{ color: `${good.color}` }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};
