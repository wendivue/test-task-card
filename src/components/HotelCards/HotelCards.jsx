import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { roomsFetch } from 'Src/store/rooms/roomsActions';
import { HotelCard } from 'Src/components/HotelCard/HotelCard';
import { textHotelCard } from 'Src/const/hotelCard';

import styles from './HotelCards.module.scss';

const HotelCards = () => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(roomsFetch());
  }, []);

  return (
    <ul className={styles.cardsList}>
      {rooms &&
        rooms.map((room) => (
          <li key={room.id} className={styles.card}>
            <HotelCard room={room} text={textHotelCard} id={room.id} />
          </li>
        ))}
    </ul>
  );
};

export { HotelCards };
