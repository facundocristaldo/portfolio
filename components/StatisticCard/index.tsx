import classNames from 'classnames';
import React from 'react';
import { FaBed } from 'react-icons/fa';
import styles from './index.module.scss';
interface Props {
  icon: React.ReactNode;
  number: string;
  aditionalText: string;
  color: string;
  backgroundColor: string;
}
export const StatisticCard: React.FC<Props> = ({
  icon,
  number,
  aditionalText,
  color,
  backgroundColor,
}) => {
  return (
    <div className={classNames(styles.card, styles.infoCard)}>
      <div className={styles.iconContainer}>
        <div className={styles.icon} style={{ color, backgroundColor }}>
          {icon}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.line1}>
          <p>{number}</p>
        </div>
        <div className={styles.line2}>
          <p>{aditionalText}</p>
        </div>
      </div>
    </div>
  );
};
