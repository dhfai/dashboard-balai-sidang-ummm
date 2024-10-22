import React from 'react';
import styles from '@/style/module/container.module.scss';
import CardComponent from '@/components/CardComponent';
import DashboardComponent from '@/components/DashboardComponent';
const Home = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.wrapp}>
            <CardComponent />
            <DashboardComponent />
        </div>
    </div>
  );
};

export default Home;
