import React from 'react';
import styles from './index.module.scss';
import {
  BsFillFileEarmarkMedicalFill,
  BsFillFileMedicalFill,
  BsFillGeoAltFill,
  BsFillHexagonFill,
  BsFillHouseDoorFill,
  BsFillPeopleFill,
  BsFillPieChartFill,
  BsPlusLg,
} from 'react-icons/bs';

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.menuitem}>
          <div className={styles.label}>Register Patient</div>
          <div className={styles.icon}>
            <BsPlusLg />
          </div>
        </div>
      </div>
      <div className={styles.menuitem}>
        <div className={styles.icon}>
          <BsFillPeopleFill />
        </div>
        <div className={styles.label}>Patients</div>
      </div>
      <div className={styles.menuitem}>
        <div className={styles.icon}>
          <BsFillPieChartFill />
        </div>
        <div className={styles.label}>Overview</div>
      </div>
      <div className={styles.menuitem}>
        <div className={styles.icon}>
          <BsFillGeoAltFill />
        </div>
        <div className={styles.label}>Map</div>
      </div>
      <div className={styles.menuitem}>
        <div className={styles.icon}>
          <BsFillHouseDoorFill />
        </div>
        <div className={styles.label}>Departments</div>
      </div>
      <div className={styles.menuitem}>
        <div className={styles.icon}>
          <BsFillFileMedicalFill />
        </div>
        <div className={styles.label}>Doctors</div>
      </div>
      <div className={styles.menuitem}>
        <div className={styles.icon}>
          <BsFillFileEarmarkMedicalFill />
        </div>
        <div className={styles.label}>History</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.menuitem}>
          <div className={styles.icon}>
            <BsFillHexagonFill />
          </div>
          <div className={styles.label}>Settings</div>
        </div>
      </div>
    </div>
  );
};
