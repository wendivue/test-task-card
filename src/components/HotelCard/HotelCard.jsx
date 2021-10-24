import React, { useState } from 'react';
import clsx from 'clsx';

import { Like } from 'Src/components/Like/Like';

import styles from './HotelCard.module.scss';

const HotelCard = ({ room, text, id }) => {
  const [isLikeActive, setIsLikeActive] = useState([id, false]);
  const { attributes, relationships } = room;
  const { apartment, city, street, house, area, unit, contact, fullName } =
    text;

  const isFlat = room.type === 'flat';
  const list = [
    { text: city, value: attributes.address.city, id: 1 },
    { text: street, value: attributes.address.street, id: 2 },
    { text: house, value: attributes.address.house, id: 3 },
    { text: apartment, value: attributes.rooms, id: 4 },
    { text: area, value: attributes.area, id: 5 },
    { text: unit, value: attributes.unit, id: 6 },
  ];

  return (
    <div className={clsx(styles.card, isFlat && styles.cardFlat)}>
      <h2 className={styles.title}>{attributes.title}</h2>
      <div className={styles.like}>
        <Like id={id} isActive={isLikeActive[1]} onChange={setIsLikeActive} />
      </div>

      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.id} className={styles.textWrapper}>
            <p className={styles.text}>
              {item.text} {item.value}
            </p>
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <li className={styles.textWrapper}>
          <p className={styles.text}>
            {contact} {relationships.type}
          </p>
        </li>
        <li className={styles.textWrapper}>
          <p className={styles.text}>
            {fullName} {relationships.attributes.first_name}{' '}
            {relationships.attributes.last_name}{' '}
            {relationships.attributes.middle_name}
          </p>
        </li>
      </ul>
    </div>
  );
};

export { HotelCard };
