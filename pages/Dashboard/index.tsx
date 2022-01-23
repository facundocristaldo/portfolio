import React, { useRef } from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import styles from './index.module.scss';
import { BsFillPeopleFill, BsWallet } from 'react-icons/bs';
import { FaAmbulance, FaBed } from 'react-icons/fa';

import { Navbar } from 'components/Navbar';
import { Sidebar } from 'components/Sidebar';
import { PatientsByGenter } from 'components/PatientsByGender';
import { StatisticCard } from 'components/StatisticCard';
import { InOutPatientsTrend } from 'components/InOutPatientsTrend';
import { TimeAdmitted } from 'components/TimeAdmitted';
import { PatientsPerMonth } from 'components/PatientsPerMonth';
import colors from 'styles/variablesExport.module.scss';
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

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <ResponsiveGridLayout
            className={styles.layout}
            layouts={layouts}
            rowHeight={50}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
          >
            <div key="1" className={styles.card}>
              <StatisticCard
                aditionalText="Total Patients"
                number="$3,256"
                icon={<FaBed />}
                color={'#006363'}
                backgroundColor={'#90ffff80'}
              />
            </div>
            <div key="2" className={styles.card}>
              <StatisticCard
                aditionalText="Available Staff"
                number="394"
                icon={<BsFillPeopleFill />}
                color={'#006363'}
                backgroundColor={'#90ffff80'}
              />
            </div>
            <div key="3" className={styles.card}>
              <StatisticCard
                aditionalText="Avg. Teat. Cost"
                number="$2,536"
                icon={<BsWallet />}
                color={'#006363'}
                backgroundColor={'#90ffff80'}
              />
            </div>
            <div key="4" className={styles.card}>
              <StatisticCard
                aditionalText="Available Cars"
                number="38"
                icon={<FaAmbulance />}
                color={'#006363'}
                backgroundColor={'#90ffff80'}
              />
            </div>
            <div key="5" className={styles.card}>
              <InOutPatientsTrend />
            </div>
            <div key="6" className={styles.card}>
              <PatientsByGenter />
            </div>
            <div key="7" className={styles.card}>
              <TimeAdmitted />
            </div>
            <div key="8" className={styles.card}>
              8
            </div>
            <div
              key="9"
              className={styles.card}
              style={{ backgroundColor: colors.primaryColor }}
            >
              <PatientsPerMonth />
            </div>
          </ResponsiveGridLayout>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
