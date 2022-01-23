import React from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
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
  BsWallet,
} from 'react-icons/bs';
import { FaAmbulance, FaBed } from 'react-icons/fa';
import classNames from 'classnames';
import { Pie, PieConfig } from '@ant-design/plots';

const ResponsiveGridLayout = WidthProvider(Responsive);
const getLayoutsFromSomewhere = (): {
  lg: Layout[];
  md: Layout[];
  sm: Layout[];
  xs: Layout[];
  xxs: Layout[];
} => ({
  lg: [
    { i: '1', x: 0, y: 0, w: 3, h: 3 },
    { i: '2', x: 3, y: 0, w: 3, h: 3 },
    { i: '3', x: 6, y: 0, w: 3, h: 3 },
    { i: '4', x: 9, y: 0, w: 3, h: 3 },
    { i: '5', x: 0, y: 3, w: 9, h: 6 },
    { i: '6', x: 9, y: 3, w: 3, h: 6 },
    { i: '7', x: 0, y: 9, w: 6, h: 6 },
    { i: '8', x: 6, y: 9, w: 3, h: 6 },
    { i: '9', x: 9, y: 9, w: 3, h: 6 },
  ],
  md: [
    { i: '1', x: 0, y: 0, w: 3, h: 3 },
    { i: '2', x: 3, y: 0, w: 3, h: 3 },
    { i: '3', x: 6, y: 0, w: 3, h: 3 },
    { i: '4', x: 9, y: 0, w: 3, h: 3 },
    { i: '5', x: 0, y: 3, w: 9, h: 6 },
    { i: '6', x: 9, y: 3, w: 3, h: 6 },
    { i: '7', x: 0, y: 9, w: 6, h: 6 },
    { i: '8', x: 6, y: 9, w: 3, h: 6 },
    { i: '9', x: 9, y: 9, w: 3, h: 6 },
  ],
  sm: [
    { i: '1', x: 0, y: 0, w: 3, h: 3 },
    { i: '2', x: 3, y: 0, w: 3, h: 3 },
    { i: '3', x: 6, y: 0, w: 3, h: 3 },
    { i: '4', x: 9, y: 0, w: 3, h: 3 },
    { i: '5', x: 0, y: 3, w: 9, h: 6 },
    { i: '6', x: 9, y: 3, w: 3, h: 6 },
    { i: '7', x: 0, y: 9, w: 6, h: 6 },
    { i: '8', x: 6, y: 9, w: 3, h: 6 },
    { i: '9', x: 9, y: 9, w: 3, h: 6 },
  ],
  xs: [
    { i: '1', x: 0, y: 0, w: 3, h: 3 },
    { i: '2', x: 3, y: 0, w: 3, h: 3 },
    { i: '3', x: 6, y: 0, w: 3, h: 3 },
    { i: '4', x: 9, y: 0, w: 3, h: 3 },
    { i: '5', x: 0, y: 3, w: 9, h: 6 },
    { i: '6', x: 9, y: 3, w: 3, h: 6 },
    { i: '7', x: 0, y: 9, w: 6, h: 6 },
    { i: '8', x: 6, y: 9, w: 3, h: 6 },
    { i: '9', x: 9, y: 9, w: 3, h: 6 },
  ],
  xxs: [
    { i: '1', x: 0, y: 0, w: 12, h: 3 },
    { i: '2', x: 0, y: 3, w: 12, h: 3 },
    { i: '3', x: 0, y: 6, w: 12, h: 3 },
    { i: '4', x: 0, y: 9, w: 12, h: 3 },
    { i: '5', x: 0, y: 12, w: 12, h: 3 },
    { i: '6', x: 0, y: 15, w: 12, h: 3 },
    { i: '7', x: 0, y: 18, w: 12, h: 3 },
    { i: '8', x: 0, y: 21, w: 12, h: 3 },
    { i: '9', x: 0, y: 24, w: 12, h: 3 },
  ],
});
const Dashboard: React.FC = () => {
  const layouts = getLayoutsFromSomewhere();
  const patientsByGenderData = [
    {
      type: 'Male',
      value: 46,
    },
    {
      type: 'Female',
      value: 54,
    },
  ];
  const patientsByGenderConfig: PieConfig = {
    height: 250,
    data: patientsByGenderData,
    appendPadding: 10,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v) => `${v}%`,
      },
    },
    className: styles.patientsByGenderChart,
  };
  return (
    <div className={styles.layout}>
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
      <div className={styles.container}>
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
        <div className={styles.content}>
          <div className={styles.title}></div>
          <ResponsiveGridLayout
            className={styles.layout}
            layouts={layouts}
            rowHeight={50}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
          >
            <div key="1" className={classNames(styles.card, styles.infoCard)}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <FaBed />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.line1}>
                  <p>$3,256</p>
                </div>
                <div className={styles.line2}>
                  <p>Total Patients</p>
                </div>
              </div>
            </div>
            <div key="2" className={classNames(styles.card, styles.infoCard)}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <BsFillPeopleFill />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.line1}>
                  <p>394</p>
                </div>
                <div className={styles.line2}>
                  <p>Available Staff</p>
                </div>
              </div>
            </div>
            <div key="3" className={classNames(styles.card, styles.infoCard)}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <BsWallet />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.line1}>
                  <p>$2,536</p>
                </div>
                <div className={styles.line2}>
                  <p>Avg. Teat. Cost</p>
                </div>
              </div>
            </div>
            <div key="4" className={classNames(styles.card, styles.infoCard)}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <FaAmbulance />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.line1}>
                  <p>38</p>
                </div>
                <div className={styles.line2}>
                  <p>Available Cars</p>
                </div>
              </div>
            </div>
            <div key="5" className={styles.card}>
              5
            </div>
            <div
              key="6"
              className={classNames(styles.card, styles.patientsByGenderCard)}
            >
              <div className={styles.titleContainer}>
                <p className={styles.title}>Patients by Gender</p>
              </div>
              <div className={styles.patientsByGenderCardContent}>
                <Pie {...patientsByGenderConfig} />
              </div>
            </div>
            <div key="7" className={styles.card}>
              7
            </div>
            <div key="8" className={styles.card}>
              8
            </div>
            <div key="9" className={styles.card}>
              9
            </div>
          </ResponsiveGridLayout>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
