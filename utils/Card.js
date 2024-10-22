import React from 'react';
import styles from '@/style/module/card.module.scss';

const Card = ({ title, icon, desc, backgroundColor }) => {
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.title}>{title}</h2>
      <h2 className={styles.desc}>{desc}</h2>
    </div>
  );
};

export default Card;
