import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { ChartProps, Line, PolarArea } from 'react-chartjs-2';
import colors from 'styles/variablesExport.module.scss';

import { CardTitle } from 'components/CardTitle';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export const PatientsPerMonth = () => {
  const PatientsPerMonthConfig: Omit<ChartProps, 'type'> = {
    options: {
      responsive: true,
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
      },
    },
    data: {
      labels: [
        '00 am',
        '01 am',
        '02 am',
        '03 am',
        '04 am',
        '05 am',
        '06 am',
        '07 am',
        '08 am',
        '09 am',
        '10 am',
        '11 am',
      ],
      datasets: [
        {
          data: [
            1012, 512, 312, 1452, 2450, 2556, 2077, 3098, 5056, 8430, 2350,
            8012,
          ],
          backgroundColor: colors.white1,
          borderColor: colors.white2,
        },
      ],
    },
  };

  return (
    <>
      <div className={styles.title}>
        <p className={styles.number}>3,240</p>
        <p className={styles.text}>Patients this month</p>
      </div>
      <div className={styles.outinPatientsCardContent}>
        <div>
          <Line {...(PatientsPerMonthConfig as any)} className={styles.chart} />
        </div>
      </div>
    </>
  );
};
