import React from 'react';
import styles from '@/style/module/table.module.scss';

const Table = ({ data }) => { // Menerima data sebagai prop
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Instansi</th>
            <th>Tarif Layanan</th>
            <th>Mulai</th>
            <th>Akhir</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>{item.namaInstansi}</td>
              <td>{item.tarifLayanan}</td>
              <td>{item.mulaiSewa}</td>
              <td>{item.akhirSewa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
