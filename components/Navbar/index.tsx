import React from 'react';
import styles from './index.module.scss';

export const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.photo}>Logo</div>
      <div className={styles.searchbar}>
        <span>search</span>
        <input type="text" />
      </div>
      <div className={styles.usermenu}>
        <div className={styles.notification}>
          <span>bell</span>
        </div>
        <div className={styles.user}>
          <div className={styles.profilepic}>
            <span>profile</span>
          </div>
          <div className={styles.menudropdown}>
            <div className={styles.icon}>
              <span>downicon</span>
            </div>
            <div className={styles.menulist}>
              <div className={styles.menuitem}>Profile</div>
              <div className={styles.menuitem}>Settings</div>
              <div className={styles.menuitem}>Log out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
