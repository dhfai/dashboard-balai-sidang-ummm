import Table from '@/utils/Table';
import React from 'react';
import styles from '@/style/module/dashboard.module.scss';
import CallendarComponent from './CallendarComonent';

const dataTable = [
    {
        no: 1,
        namaInstansi: 'Instansi 1',
        tarifLayanan: 'Rp 100.000',
        mulaiSewa: '2021-01-01',
        akhirSewa: '2021-01-31',
    },
    {
        no: 2,
        namaInstansi: 'Instansi 2',
        tarifLayanan: 'Rp 150.000',
        mulaiSewa: '2021-02-01',
        akhirSewa: '2021-02-28',
    },
    {
        no: 3,
        namaInstansi: 'Instansi 3',
        tarifLayanan: 'Rp 200.000',
        mulaiSewa: '2021-03-01',
        akhirSewa: '2021-03-31',
    },
];

const DashboardComponent = () => {
  return (
    <div className={styles.heroContainer}>
      <Table data={dataTable} />
      {/* <section>
        <CallendarComponent />
      </section> */}
    </div>
  );
};

export default DashboardComponent;
