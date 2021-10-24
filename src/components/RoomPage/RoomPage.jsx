import React from 'react';

import { HotelCards } from 'Src/components/HotelCards/HotelCards';

import styles from './RoomPage.module.scss';

const RoomPage = () => (
  <main className={styles.main}>
    <div className={styles.layout}>
      <HotelCards />
    </div>
  </main>
);

export { RoomPage };
