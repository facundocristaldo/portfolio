import React from 'react';
import styles from './index.module.scss';
interface Props {
  title: string;
}
export const CardTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
