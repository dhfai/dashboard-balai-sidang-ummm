import React from 'react';
import { FaUpload, FaDownload, FaFolderOpen } from 'react-icons/fa';
import Card from '@/utils/Card';
import Container from '@/utils/Container';

const data = [
  {
    icon: <FaUpload />,
    title: '2.34 Gb',
    desc: 'Bytes uploaded',
    backgroundColor: '#abd6e9',
  },
  {
    icon: <FaDownload />,
    title: '12.34 Gb',
    desc: 'Bytes downloaded',
    backgroundColor: '#a6c0f1',
  },
  {
    icon: <FaFolderOpen />,
    title: '17.66 Gb',
    desc: 'Used of 20 Gb',
    backgroundColor: '#a6aeef',
  },
  {
    icon: <FaFolderOpen />,
    title: '17.66 Gb',
    desc: 'Used of 20 Gb',
    backgroundColor: '#a6aeef',
  },
];

const CardComponent = () => {
  return (
    <Container>
      {data.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          backgroundColor={item.backgroundColor}
        />
      ))}
    </Container>
  );
};

export default CardComponent;
