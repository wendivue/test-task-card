import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './Like.module.scss';

const Like = ({ id, onChange, isActive = false }) => {
  const [isLikeActive, setIsLikeActive] = useState(isActive);

  const handleClickLike = () => {
    setIsLikeActive(!isLikeActive);

    if (onChange && id) onChange([id, !isLikeActive]);
  };

  useEffect(() => {
    setIsLikeActive(isActive);
  }, [isActive]);

  return (
    <>
      <label>
        <input
          className={clsx('material-icons', styles.checkbox)}
          type="checkbox"
          name="like"
          onChange={handleClickLike}
          checked={isLikeActive}
        />
      </label>
    </>
  );
};

export { Like };
